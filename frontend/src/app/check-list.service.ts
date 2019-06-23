import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { UserInfo } from './models/userInfo.model';
import { CheckInfo } from './models/checkinfo.model';
import { CheckList } from './models/checklist.model';

@Injectable({
  providedIn: 'root'
})
export class CheckListService {
  private users: UserInfo[];
  checkInfo: CheckInfo[];
  private checklists: CheckList[];
  checkSubject = new Subject<CheckInfo[]>();
  constructor(private httpClient: HttpClient) { }
			  
  getCheckList(){
       this.httpClient
      .get<CheckInfo[]>('http://localhost:3000/checklist')
      .subscribe(
        (response) => {
			if(response[0]){
				//this.emitCheckSubject();
				this.checkInfo=response;
				this.emitCheckSubject();
				console.log(this.checkInfo);
			}else{
			    this.httpClient
               .get<UserInfo[]>('http://localhost:3000/users')
               .subscribe(
               (response) => {
				       for(let res of response) {
                                const addCheck = new CheckList(
									new Date().getTime(),
									new Date().getTime(),
									res.id
								);
								console.log(addCheck);
								this.addCheckList(addCheck);
							}

				  //this.emitCheckSubject();
				  //this.getCheckList();
             },
            (error) => {
            console.log('Erreur ! : ' + error);
              }
            );
          }
          //this.appareils = response;
          //this.emitAppareilSubject();
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
  }
  addCheckList(checkList: CheckList) {
  //console.log(checkList);
      this.httpClient
      .post('http://localhost:3000/checklist', checkList)
      .subscribe(
        () => {
          console.log('Enregistrement terminé !');
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );  
  }
    updateCheckList(checkList: CheckList,id) {
  //console.log(checkList);
      this.httpClient
      .put('http://localhost:3000/checklist/'+id, checkList)
      .subscribe(
        () => {
          console.log('Enregistrement terminé !');
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );  
  }
  updateAfternoonCheckList(checkList: CheckList,id) {
  //console.log(checkList);
      this.httpClient
      .put('http://localhost:3000/checklist-af/'+id, checkList)
      .subscribe(
        () => {
          console.log('Enregistrement terminé !');
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );  
  }
  checkMornig(id, users_id, afternoon) {
	const updateCheck = new CheckList(
						new Date().getTime(),
						new Date().getTime(),
						users_id
								);
	this.updateCheckList(updateCheck,id);
	this.getCheckList();
	//this.emitCheckSubject();
  }
  checkAfternoon(id, users_id, morning) {
	const updateCheck = new CheckList(
						morning,
						new Date().getTime(),
						users_id
								);
	this.updateAfternoonCheckList(updateCheck,id);
	this.getCheckList();
	//this.emitCheckSubject();
  }
  
  emitCheckSubject() {
    this.checkSubject.next(this.checkInfo);
  }
}