import {Actions, Effect, ofType} from '@ngrx/effects';

import * as AuthActions from './auth.actions';
import {catchError, map, switchMap, tap} from 'rxjs/operators';
import {environment} from '../../../environments/environment';
import {AuthResponseData} from '../auth.service';
import {HttpClient} from '@angular/common/http';
import {of, throwError} from 'rxjs';

import {Injectable} from '@angular/core';
import {Router} from '@angular/router';

@Injectable()
export class AuthEffects {
  @Effect()
  authLogin = this.actions$.pipe(
    ofType(AuthActions.AuthActionsEnum.LOGIN_START),
    switchMap((authData: AuthActions.LoginStart) => {
        return this.http.post<AuthResponseData>(
          'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' + environment.firebaseAPIKey,
          {
            email: authData.payload.email,
            password: authData.payload.password,
            returnSecureToken: true
          }).pipe(
          map(resData => {
            const expirationDate = new Date(new Date().getTime() + (+resData.expiresIn * 1000));
            return new AuthActions.Login({
              expirationDate,
              email: resData.email,
              token: resData.idToken,
              userId: resData.localid
            });
          }),
          catchError(error => {
            let errorMessage = 'An Unknown Error occured';
            if (!error.error || !error.error.error) {
              return of(new AuthActions.LoginFail(errorMessage));
            }
            switch (error.error.error.message) {
              case 'EMAIL_EXISTS':
                errorMessage = 'Account is already taken';
                break;
              case 'INVALID_PASSWORD':
                errorMessage = 'Wrong Password';
                break;
              case 'EMAIL_NOT_FOUND':
                errorMessage = 'Email Not Found';
                break;
              default:
                errorMessage = 'An Unknown Error Occurred';
            }
            return of(new AuthActions.LoginFail(errorMessage));
          }),
        );
      }
    )
  );

  // For navigating
  @Effect({dispatch: false})
  authSuccess = this.actions$.pipe(
    ofType(AuthActions.AuthActionsEnum.LOGIN),
    tap(() => {
      this.router.navigate(['/']);
    })
  );

  constructor(
    private actions$: Actions,
    private http: HttpClient,
    private router: Router
  ) {
  }
}
