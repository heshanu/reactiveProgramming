import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../../store/app.status';
import { loginStart } from '../state/auth.action';
import { setErrorMessage, setLoadingSpinner } from '../../../store/shared.actions';
import { Observable } from 'rxjs';
import { getErrorMessage } from '../../../store/shared.selector';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm!: FormGroup;
  constructor(private store: Store<AppState>) { }
  showError!:Observable<string>;

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }

  onLoginSubmit() {

      console.log(this.loginForm.value);
      this.store.dispatch(setLoadingSpinner({status:true}));
      const email = this.loginForm.value.email;
      const password = this.loginForm.value.password;
      this.store.dispatch(loginStart({ email, password }));


  }
}
