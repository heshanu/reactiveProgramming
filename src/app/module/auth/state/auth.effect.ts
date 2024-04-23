import { exhaustMap, map, mergeMap } from 'rxjs/operators';
import { loginSucess, loginStart } from './auth.action';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { AuthService } from '../../service/auth.service';

@Injectable()
export class AuthEffects {
    constructor(private actions$: Actions, private authService: AuthService) { }

    login$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(loginStart),
            exhaustMap((action) => {
                return this.authService.login(action.email, action.password).pipe(
                    map((data: any) => {
                        const formatedUser = this.authService.formatUser(data);
                        return loginSucess({formatedUser});
                    })
                );
            })
        );
    });

}