import { Injectable } from '@angular/core';
import { Login } from './models/login.model';
import { Subject } from 'rxjs/Subject';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { UserInfo } from './models/userInfo.model';
import { RouterModule,Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuth = false;
  isAdmin = false;
  userId='';
  isNotAuthenticated=false;
  private users: UserInfo[];
  adminSubject = new Subject<any>();
  constructor(private httpClient: HttpClient,
              private router: Router) { }

  signIn(login: Login) {
      this.httpClient
      .post<UserInfo[]>('http://localhost:3000/users-mail/', login)
      .subscribe(
        (response) => {
			if(response[0]){
			  if(response[0].id){
				  this.isAuth=true;
			  }
			  if(response[0].role==2){
				  this.isAdmin=true;
				  this.emitAdminSubject();
			  }
			  this.userId = response[0].id;
			  this.router.navigate(['/checklist']);
		  //console.log(this.userId);
			}else{
				this.isNotAuthenticated=true;
				console.log(this.isNotAuthenticated);
				console.log(this.isAdmin);
			}
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );  
  }
  emitAdminSubject() {
    this.adminSubject.next(this.isAdmin);
  }
  signOut() {
    this.isAuth = false;
    this.isAdmin = false;
	this.isNotAuthenticated=false;
    this.userId='';
	this.emitAdminSubject();
  }
}
