import { Injectable } from '@angular/core';
import { User } from './models/User.model';
import { Subject } from 'rxjs/Subject';
import { HttpClient,HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users: User[];
  //userSubject = new Subject<User[]>();
  constructor(private httpClient: HttpClient) { }
  addUser(user: User) {
  console.log(user);
      this.httpClient
      .post('http://localhost:3000/users', user)
      .subscribe(
        () => {
          console.log('Enregistrement terminé !');
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );  
  }
}
