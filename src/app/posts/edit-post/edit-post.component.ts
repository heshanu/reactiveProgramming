import { Component } from '@angular/core';
import { PostInterface } from '../../modal/posts.interface';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
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

  constructor(private route: ActivatedRoute, private store: Store<AppState>) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      this.postSubscription = this.store
        .select(getPostById, { id })
        .subscribe((data) => {
          this.post = data;
          console.log(data);
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

  onUpdate(): void {
    console.log("updated");

    if (!this.postForm.valid) {
      return;
    }

    const updatedPost: PostInterface = {
      title: this.postForm.value.title,
      description: this.postForm.value.description,
    };

    console.log(this.postForm.value.title);

    this.store.dispatch(updatePost({ post: updatedPost }));
  }
}
