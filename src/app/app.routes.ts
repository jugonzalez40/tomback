import { Routes, CanActivate } from '@angular/router';
import {LoginComponent} from './components/login/login.component';


export const ROUTES: Routes = [
  { path: '', component: LoginComponent },
  { path: '**', redirectTo: '' }
];