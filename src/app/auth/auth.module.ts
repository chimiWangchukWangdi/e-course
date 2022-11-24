import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AuthComponent } from "./auth.component";
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { AuthRoutingModule } from "./auth-routing.module";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AuthComponent,
    SignInComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent
    ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AuthRoutingModule
  ],
  providers: [

  ],
  bootstrap: []
})
export class AuthModule { }
