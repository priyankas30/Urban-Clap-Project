import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormreactiveComponent } from './formreactive/formreactive.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { ForgotpassComponent } from './forgotpass/forgotpass.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { HomepageComponent } from './homepage/homepage.component';

@NgModule({
  declarations: [
    AppComponent,
    FormreactiveComponent,
    SignupComponent,
    ForgotpassComponent,
    LoginpageComponent,
    HomepageComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    SignupComponent,
    ForgotpassComponent,
    LoginpageComponent,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {  }
