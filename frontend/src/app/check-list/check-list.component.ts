import { Component, OnInit , OnDestroy} from '@angular/core';
import { CheckListService } from '../check-list.service';
import { AuthService } from '../auth.service';
import { HttpClient } from '@angular/common/http';
import { UserInfo } from '../models/userInfo.model';
import { CheckInfo } from '../models/checkinfo.model';
import { CheckList } from '../models/checklist.model';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-check-list',
  templateUrl: './check-list.component.html',
  styleUrls: ['./check-list.component.scss']
})
export class CheckListComponent implements OnInit , OnDestroy{
  name: string;
  userName: string;
  email: string;
  usersId;
  afternoon;
  morning;
  id;
  checkInfos: CheckInfo[];
  userId;
  private checklists: CheckList[];
  checkInfosSubscription: Subscription;
  //personnes:Array<UserInfo> = new Array<UserInfo>();
  constructor(private checkListService: CheckListService,
			  private authService: AuthService,
              private httpClient: HttpClient) {}

  ngOnInit() {
	this.userId = this.authService.userId;
	this.checkListService.getCheckList();
	this.checkInfos = this.checkListService.checkInfo;
	console.log(this.checkInfos);
	if(this.checkInfos){
		console.log(true);
		this.checkListService.getCheckList();
		this.checkInfos = this.checkListService.checkInfo;
	}
	//console.log(this.checkListService.checkInfo);
	this.checkInfosSubscription = this.checkListService.checkSubject.subscribe(
      (checkInfos: CheckInfo[]) => {
        	this.checkInfos = this.checkListService.checkInfo;
      }
    );
    this.checkListService.emitCheckSubject();
	console.log(this.checkInfos);
	//this.checkListService.getCheckList();
	//console.log(this.personnes);
  }
  onCheckMorning(id, users_id,afternoon){
	this.checkListService.checkMornig(id, users_id,afternoon);
  }
  onCheckAfternoon(id, users_id,morning){
	this.checkListService.checkAfternoon(id, users_id,morning);
  }
  ngOnDestroy() {
    this.checkInfosSubscription.unsubscribe();
  }

}
