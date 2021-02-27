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
// 1. Import the libs you need
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {AngularFireAuthModule} from '@angular/fire/auth';

const config = {
  apiKey: "AIzaSyAF5A5uPwZ0QbpbX_2BgGG7Feb7XSBqBE0",
  authDomain: "tomeback-f13a0.firebaseapp.com",
  projectId: "tomeback-f13a0",
  storageBucket: "tomeback-f13a0.appspot.com",
  messagingSenderId: "696061875752",
  appId: "1:696061875752:web:09a1cde09bc50f9fc7871d",
  measurementId: "G-H7J6S7Q2TL"
};

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
    ReactiveFormsModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule // storage
  ],
  exports: [RouterModule],

  providers: [LoginService, AuthService, AuthGuardService, {provide: NZ_I18N, useValue: es_ES}],
  bootstrap: [AppComponent]
})
export class AppModule { }
