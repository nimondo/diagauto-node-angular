import { Component, OnInit } from '@angular/core';
import { CheckHoraireService } from '../check-horaire.service';
import { FormBuilder, FormGroup ,Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CheckHoraire } from '../models/checkhoraire.model';
import { CheckHoraireForm } from '../models/checkhoraireform.model';

@Component({
  selector: 'app-check-hours',
  templateUrl: './check-hours.component.html',
  styleUrls: ['./check-hours.component.scss']
})
export class CheckHoursComponent implements OnInit {
  checkHoraires: CheckHoraire[];
  date1;
  date2;
  checkverifySubmit:boolean;
  checkHoursForm:FormGroup;
  constructor(private checkHoraireService : CheckHoraireService,
              private formBuilder: FormBuilder,
              private httpClient: HttpClient) { }

  ngOnInit() {
	  this.checkverifySubmit=this.checkHoraireService.verifySubmit;
	  this.initForm();
  }
  initForm() {
    this.checkHoursForm = this.formBuilder.group({
      jour1: ['', Validators.required],
      mois1: ['', Validators.required],
      annee1: ['', Validators.required],
      jour2: ['', Validators.required],
      mois2: ['', Validators.required],
      annee2: ['', Validators.required]
    });
  }
  onSubmitForm() {
    const formValue = this.checkHoursForm.value;
	console.log(formValue );
	this.date1=new Date(formValue['annee1'],formValue['mois1']-1,formValue['jour1']).getTime();
	this.date2=new Date(formValue['annee2'],formValue['mois2']-1,formValue['jour2'],23,59,99,100).getTime();
    const addCheck = new CheckHoraireForm(
		  this.date1,
		  this.date2
	);
	console.log(addCheck);
	this.checkHoraireService.getCheckHoraire(addCheck);
	this.checkverifySubmit=this.checkHoraireService.verifySubmit;
	console.log(this.checkverifySubmit);
	this.checkHoraires= this.checkHoraireService.checkHoraire;
  }

}
