import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { PostInterface } from '../modal/posts.interface';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  constructor(private http:HttpClient) {}

  getPosts(): Observable<PostInterface[]> {
    return this.http
      .get<PostInterface[]>(`https://vue-completecourse.firebaseio.com/posts.json`)
      .pipe(
        map((data:any) => {
          const posts: PostInterface[] = [];
          for (let key in data) {
            posts.push({ ...data[key], id: key });
          }
          return posts;
        })
      );
  }

}
