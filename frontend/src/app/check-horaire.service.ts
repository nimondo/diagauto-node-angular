import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { UserInfo } from './models/userInfo.model';
import { CheckHoraire } from './models/checkhoraire.model';
import { CheckList } from './models/checklist.model';
import { CheckHoraireForm } from './models/checkhoraireform.model';

@Injectable({
  providedIn: 'root'
})
export class CheckHoraireService {
  verifySubmit=false;
  checkHoraire: CheckHoraire[];
  constructor(private httpClient: HttpClient) { }
  getCheckHoraire(checkHoraireForm: CheckHoraireForm){
	  console.log(checkHoraireForm);
      this.httpClient
      .post<CheckHoraire[]>('http://localhost:3000/checkhoraire/',checkHoraireForm)
      .subscribe(
        (response) => {
		  this.verifySubmit=true;
	      this.checkHoraire=response;
		  console.log(response);
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );  
  }
  
}
