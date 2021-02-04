import {Routes, CanActivate} from '@angular/router';
import {AuthGuardService} from './auth/auth.guard';
import {LoginComponent} from './components/login/login.component';
import {MainComponent} from './components/main/main.component';


export const ROUTES: Routes = [
  {path: '', component: LoginComponent},
  {path: 'main', component: MainComponent, canActivate: [AuthGuardService]},
  { path: '**', redirectTo: '' }
];