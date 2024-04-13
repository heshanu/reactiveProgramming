import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.status';
import { Observable } from 'rxjs';
import { PostInterface } from '../../modal/posts.interface';
import { getPosts } from './state/posts.selector';


@Component({
    selector: 'app-post-list',
    templateUrl: './post-list.component.html',
    styleUrl: './post-list.component.css'
})
export class PostListComponent implements OnInit {

    postList$!: Observable<PostInterface[] | any[]>;

    constructor(private store: Store<AppState>) { }

    ngOnInit(): void {
        this.postList$ = this.store.select(getPosts);
    }

}
