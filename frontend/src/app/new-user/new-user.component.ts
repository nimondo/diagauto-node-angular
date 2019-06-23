import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup ,Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/User.model';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {

  userForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private httpClient: HttpClient,
			  private userService: UserService,
			  private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.userForm = this.formBuilder.group({
      name: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
	  role: ['1', Validators.required]
    });
  }
  onSubmitForm() {
    const formValue = this.userForm.value;
	console.log(formValue);
    const newUser = new User(
      formValue['name'],
      formValue['username'],
      formValue['email'],
      formValue['password'],
	  formValue['role']
    );
    this.userService.addUser(newUser);
    this.router.navigate(['/checklist']);
  }
}
