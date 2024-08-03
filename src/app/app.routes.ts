import { Routes } from '@angular/router';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { PasswordManagerComponent } from './components/apps/password-manager/password-manager.component';
import { AuthGuard } from './services/auth.guard';

export const routes: Routes = [
  { path: 'login', component: SignInComponent },
  {
    path: 'password-manager',
    component: PasswordManagerComponent,
    canActivate: [AuthGuard],
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
];
