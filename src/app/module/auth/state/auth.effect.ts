import { exhaustMap, map } from 'rxjs/operators';
import { loginSucess, loginStart } from './auth.action';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { User } from '../../../modal/user.interface';

@Injectable()
export class AuthEffects {
    constructor(private actions$: Actions, private authService: AuthService) { }

    login$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(loginStart),
            exhaustMap((action) => {
                return this.authService.login(action.email, action.password).pipe(
                    map((data: any) => {
                        const user = this.authService.formatUser(data);
                        return loginSucess({ user });
                    })
                );
            })
        );
    });
}