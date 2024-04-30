import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from './store/app.status';
import { getLoading } from './store/shared.selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{

  showLoading!:Observable<boolean>;

  constructor(private store:Store<AppState>){}

  ngOnInit(): void {
    this.showLoading = this.store.select(getLoading);
    console.log(this.showLoading);
    
  }
  
}
