import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {MainComponent} from './components/main/main.component';
import {ExpenseComponent} from './components/expense/expense.component';
import {RecordComponent} from './components/record/record.component';
import {LoginComponent} from './components/login/login.component';
import {RouterModule} from '@angular/router';
import {ROUTES} from './app.routes';
import {NZ_I18N} from 'ng-zorro-antd/i18n';
import {es_ES} from 'ng-zorro-antd/i18n';
import {registerLocaleData} from '@angular/common';
import es from '@angular/common/locales/es';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {VendorNgZorroAntdModule} from './components/vendor.module';
import {LoginService} from './components/login/login.service';
import {AuthService} from './auth/auth.service';
import {AuthGuardService} from './auth/auth.guard';
import {JwtHelperService, JwtModule, JWT_OPTIONS} from '@auth0/angular-jwt';
registerLocaleData(es);

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ExpenseComponent,
    RecordComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    VendorNgZorroAntdModule,
    JwtModule,
    ReactiveFormsModule
  ],
  exports: [RouterModule],

  providers: [LoginService, AuthService, AuthGuardService, {provide: JWT_OPTIONS, useValue: JWT_OPTIONS}, JwtHelperService, {provide: NZ_I18N, useValue: es_ES}],
  bootstrap: [AppComponent]
})
export class AppModule { }
