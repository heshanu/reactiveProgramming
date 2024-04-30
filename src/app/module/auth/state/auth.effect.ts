import { exhaustMap, map, mergeMap } from 'rxjs/operators';
import { loginStart, loginSucess } from './auth.action';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { Store } from '@ngrx/store';
import { AppState } from '../../../store/app.status';
import { setLoadingSpinner } from '../../../store/shared.actions';

@Injectable()
export class AuthEffects {
            constructor(private store:Store<AppState>,private actions$: Actions, private authService: AuthService){}
            login$ = createEffect(() => {
                return this.actions$.pipe(
                    ofType(loginStart),
                    exhaustMap((action) => {
                        return this.authService.login(action.email, action.password).pipe(
                            map((data:any) => {
                            this.store.dispatch(setLoadingSpinner({status:false}));
                            const formatUserUser = this.authService.formatUser(data);
                               return  loginSucess(); // Fix: Pass an object with a `user` property
                            })
                        );
                    })
                );  
          });
}