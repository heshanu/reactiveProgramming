import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { PostInterface } from '../modal/posts.interface';
import { SharedState } from '../store/shared.state';
import { Store } from '@ngrx/store';
import { setLoadingSpinner } from '../store/shared.actions';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  constructor(private http:HttpClient,private store:Store<SharedState>) {}

  getPosts(): Observable<PostInterface[]> {
    return this.http
      .get<PostInterface[]>(`https://vue-completecourse.firebaseio.com/posts.json`)
      .pipe(
        map((data:any) => {
          const posts: PostInterface[] = [];
          this.store.dispatch(setLoadingSpinner({status:true}));
          for (let key in data) {
            posts.push({ ...data[key], id: key });
          }
          this.store.dispatch(setLoadingSpinner({status:false}));
          return posts;
        })
      );
  }

}
