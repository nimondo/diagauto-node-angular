import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService} from './auth.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'mon-projet-model';
  admin: boolean;
  adminSubscription: Subscription;
  constructor(private authService: AuthService) { }
  ngOnInit() {
	this.adminSubscription = this.authService.adminSubject.subscribe(
      (admin: any) => {
        	this.admin = this.authService.isAdmin;
      }
    );
    this.authService.emitAdminSubject();
	console.log(this.admin);
  }
  ngOnDestroy() {
    this.adminSubscription.unsubscribe();
  }
}
