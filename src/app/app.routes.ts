import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { CreateAccountComponent } from './components/create-account/create-account.component';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from './auth.gaurd';

export const routes: Routes = [
  { path: 'account/login', component: LoginComponent },
  { path: 'account/registration', component: CreateAccountComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
];
