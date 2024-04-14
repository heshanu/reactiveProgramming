import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PostInterface } from '../../modal/posts.interface';
import { Store } from '@ngrx/store';
import { addPost, deletePost } from '../post-list/state/posts.action'


@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrl: './add-post.component.css'
})
export class AddPostComponent {
  postForm!: FormGroup;

  constructor(private store: Store<{ post: PostInterface }>) { }

  ngOnInit(): void {
    this.postForm = new FormGroup({
      title: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
      ]),
      description: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
      ]),
    });
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


  post: PostInterface = {
    title: '',
    description: ''
  }

  onAddPost() {
    if (!this.postForm.valid) {
      return;
    }

    const post: PostInterface = {
      title: this.postForm.value.title,
      description: this.postForm.value.description,
    };

    this.store.dispatch(addPost({ post }));
  }

}
