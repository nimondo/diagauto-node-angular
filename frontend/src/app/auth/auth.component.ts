import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { RouterModule,Router } from '@angular/router';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/User.model';
import { Login } from '../models/login.model';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  authStatus: boolean;
  authIsAdmin: boolean;
  authIsNotAuthenticated:boolean;
  authUserId: string;
  loginForm: FormGroup;

  constructor(private authService: AuthService,
              private router: Router,
			  private formBuilder: FormBuilder,
              private httpClient: HttpClient) { }

  ngOnInit() {
    this.authStatus = this.authService.isAuth;
	this.authIsAdmin = this.authService.isAdmin;
	this.authUserId = this.authService.userId;
	this.authIsNotAuthenticated = this.authService.isNotAuthenticated;
	console.log(this.authIsNotAuthenticated);
	this.initForm();
  }
  initForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }
    onSubmitForm() {
    const formValue = this.loginForm.value;
	console.log(formValue);
    const mailUser = new Login(
      formValue['email'],
      formValue['password']
    );
	console.log(mailUser);
    this.authService.signIn(mailUser);
	this.authIsNotAuthenticated = this.authService.isNotAuthenticated;
  }


  onSignOut() {
    this.authService.signOut();
    this.authStatus = this.authService.isAuth;
  }

}
