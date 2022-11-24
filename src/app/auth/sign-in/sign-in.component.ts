import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FacadeService } from '../../services/facade.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  loginForm = this.fb.group({
    userName: ['', [Validators.required, Validators.minLength(2)]],
    password: ['', [Validators.required, Validators.minLength(2)]]
  });

  constructor(public facadeService: FacadeService, private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  onFormSubmit(form: FormGroup) {
    return this.facadeService.signIn(form);
  }

  googleAuth() {
    return this.facadeService.googleAuth();
  }

}
