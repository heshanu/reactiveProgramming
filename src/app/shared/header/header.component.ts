import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.status';
import { isAuthenticated } from '../../module/auth/state/auth.selector';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})

export class HeaderComponent implements OnInit{

  isAuthenticated!:Observable<boolean>;
  constructor(private store:Store<AppState>){}

  ngOnInit(): void {
    this.isAuthenticated=this.store.select(isAuthenticated);
    console.log(this.isAuthenticated);
  }
}
