import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule,Routes,ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot,Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewUserComponent } from './new-user/new-user.component';
import { AuthComponent } from './auth/auth.component';
import { CheckListComponent } from './check-list/check-list.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { CheckHoursComponent } from './check-hours/check-hours.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuardService} from './auth-guard.service';

const appRoutes: Routes = [
  { path: 'auth', component: AuthComponent },
  { path: 'new-user', canActivate: [AuthGuardService], component: NewUserComponent },
  { path: 'check-hours', canActivate: [AuthGuardService],   component: CheckHoursComponent },
  { path: 'checklist', canActivate: [AuthGuardService], component: CheckListComponent },
  { path: '', canActivate: [AuthGuardService], component: CheckListComponent },
  { path: 'not-found', component: FourOhFourComponent },
  { path: '**', redirectTo: 'not-found' }
];
@NgModule({
  declarations: [
    AppComponent,
    NewUserComponent,
    AuthComponent,
    CheckListComponent,
    FourOhFourComponent,
    CheckHoursComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	FormsModule,
	ReactiveFormsModule,
	HttpClientModule,
	RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
