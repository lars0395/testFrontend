import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Md5 } from 'ts-md5/dist/md5';

import { AppComponent } from './app.component';
import { EvaluationComponent } from './evaluation/evaluation.component';
import { AppRoutingModule } from './app-routing.module';
import { OverviewComponent } from './overview/overview.component';
import { LoginComponent } from './login/login.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { AccountComponent } from './account/account.component';
import { RegisterComponent } from './register/register.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDialogModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatRippleModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    EvaluationComponent,
    OverviewComponent,
    LoginComponent,
    ImpressumComponent,
    AccountComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule
  ],
  providers: [Md5],
  bootstrap: [AppComponent],
  entryComponents: [RegisterComponent, LoginComponent]
})
export class AppModule { }
