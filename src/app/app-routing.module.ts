import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from './app.component';
import {EvaluationComponent} from './evaluation/evaluation.component';
import {OverviewComponent} from './overview/overview.component';
import {LoginComponent} from './login/login.component';
import {ImpressumComponent} from './impressum/impressum.component';
import {AccountComponent} from './account/account.component';

const routes: Routes = [
  { path: 'evaluation', component: EvaluationComponent },
  { path: 'overview', component: OverviewComponent },
  { path: 'login', component: LoginComponent },
  { path: 'impressum', component: ImpressumComponent },
  { path: 'account', component: AccountComponent },
  { path: '', redirectTo: '/overview', pathMatch: 'full' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
