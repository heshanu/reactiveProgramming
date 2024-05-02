import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from './store/app.status';
import { getErrorMessage, getLoading } from './store/shared.selector';
import { autoLogin } from './module/auth/state/auth.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{

  showLoading!:Observable<boolean>;
  showError!:Observable<string>;

  constructor(private store:Store<AppState>){}

  ngOnInit(): void {
    this.showLoading = this.store.select(getLoading);
    this.showError = this.store.select(getErrorMessage);
    console.log(this.showLoading);
    this.store.dispatch(autoLogin());
  }  
}
