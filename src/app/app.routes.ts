import { Routes } from '@angular/router';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { PasswordManagerComponent } from './components/apps/password-manager/password-manager.component';

export const routes: Routes = [
  {path : "", component: SignInComponent },
  {path : "pass", component: PasswordManagerComponent }
];
