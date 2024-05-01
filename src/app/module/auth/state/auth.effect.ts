import { catchError, exhaustMap, map, mergeMap, tap } from 'rxjs/operators';
import { loginStart, loginSucess } from './auth.action';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { Store } from '@ngrx/store';
import { AppState } from '../../../store/app.status';
import { setErrorMessage, setLoadingSpinner } from '../../../store/shared.actions';
import { of } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class AuthEffects {
    constructor(
        private actions$: Actions,
        private authService: AuthService,
        private store: Store<AppState>,
        private router: Router
      ) {}
    
      login$ = createEffect(() => {
        return this.actions$.pipe(
          ofType(loginStart),
          exhaustMap((action) => {
            return this.authService.login(action.email, action.password).pipe(
              map((data:any) => {
                this.store.dispatch(setLoadingSpinner({ status: false }));
                this.store.dispatch(setErrorMessage({ message: '' }));
                const user = this.authService.formatUser(data);
                return loginSucess();
              }),
              catchError((errResp:any) => {
                this.store.dispatch(setLoadingSpinner({ status: false }));
                const errorMessage = this.authService.getErrorMessage(
                  errResp.error.error.message
                );
                console.log(errorMessage);
                
                return of(setErrorMessage({ message: errorMessage }));
              })
            );
          })
        );
      });

      //direct home page after login sucess
      loginRedirect$ = createEffect(()=>{
        return this.actions$.pipe(
          ofType(loginSucess),
          tap(()=>{
           this.router.navigate(['/']);
          })
        )
      },{dispatch:false});
}