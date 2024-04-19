import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../envirnments/envirnment';
import { AuthResponseData } from '../../modal/auth.responseDataModal';
import { User } from '../../modal/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  login(email: string, password: string) {
    return this.http.post(
      `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.FIREBASE_API_KEY}`,
      { email, password, returnSecureToken: true }
    );
  }

  formatUser(data: AuthResponseData) {
    const expirationDate = new Date(new Date().getTime() + +(data.expiresIn) * 1000)
    const user = new User(data.email, data.idToken, data.localId, expirationDate);
    return user;
  }
}
