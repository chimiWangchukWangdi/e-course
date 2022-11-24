import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class FacadeService {

  constructor(private authService: AuthService) { }

  signIn(form: FormGroup) {
    let userName = form.get('userName')?.value;
    let password = form.get('password')?.value;
    return this.authService.SignIn(userName, password);
  }

  googleAuth() {
    return this.authService.GoogleAuth();
  }

  signOut() {
    return this.authService.SignOut();
  }
}
