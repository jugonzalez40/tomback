import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from '../../auth/auth.service';
import {LoginService} from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  validateForm: FormGroup;

  async submitForm(): Promise<void> {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }

    if (this.validateForm.invalid) return;

    await this.loginService.login(
      this.validateForm.get('email').value,
      this.validateForm.get('password').value);

  }

  constructor(private fb: FormBuilder, private loginService: LoginService, private authService: AuthService, private route: Router) {
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      email: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true]
    });

    if(this.authService.isAuthenticated()) {
      this.route.navigate(['main'])
    }


  }

}
