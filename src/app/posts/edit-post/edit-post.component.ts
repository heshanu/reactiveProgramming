import { Component } from '@angular/core';
import { PostInterface } from '../../modal/posts.interface';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';
import { AppState } from '../../store/app.status';
import { getPostById } from '../post-list/state/posts.selector';
import { updatePost } from '../post-list/state/posts.action';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrl: './edit-post.component.css'
})

export class EditPostComponent {

  post!: PostInterface;
  postForm!: FormGroup;
  postSubscription!: Subscription;

  constructor(private router: Router, private route: ActivatedRoute, private store: Store<AppState>) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      this.postSubscription = this.store
        .select(getPostById, { id })
        .subscribe((data) => {
          this.post = data;
          this.createForm();
        });
    });
  }

  createForm() {
    this.postForm = new FormGroup({
      title: new FormControl(this.post.title, [
        Validators.required,
        Validators.minLength(6),
      ]),
      description: new FormControl(this.post.description, [
        Validators.required,
        Validators.minLength(10),
      ]),
    });
  }

  ngOnDestroy() {
    if (this.postSubscription) {
      this.postSubscription.unsubscribe();
    }
  }

  showDescriptionErrors() {
    const descriptionForm = this.postForm.get('description');
    if (descriptionForm?.touched && descriptionForm.errors !== null) {
      if (descriptionForm?.errors?.['required']) {
        return 'Description is required';
      }

      if (descriptionForm.errors?.['minlength']) {
        return 'Description should be of minimum 10 characters length';
      }
    }
    return null; // default return value
  }

  onSubmit() {
    if (!this.postForm.valid) {
      return;
    }

    const title = this.postForm.value.title;
    const description = this.postForm.value.description;

    const post: PostInterface = {
      id: this.post.id,
      title,
      description,
    };

    //dispatch the action
    this.store.dispatch(updatePost({ post }));
    this.router.navigate(['posts']);
  }

}
