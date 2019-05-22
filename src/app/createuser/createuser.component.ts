import { Component, OnInit } from '@angular/core';
import { UserLogin } from "./../models/login";
import { Router } from "@angular/router";
import { LoginService } from './../appservices/loginservice.service';

@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.component.html',
  styleUrls: ['./createuser.component.css']
})
export class CreateuserComponent implements OnInit {
  userLogin: UserLogin = new UserLogin();
  constructor(private router: Router, private loginService: LoginService) { }
  successFlag = false;
  ngOnInit() {
  }

  submit() {
    this.loginService.createUser(this.userLogin).subscribe((data) => {
      this.successFlag = data && data.status?true:false;
      this.userLogin = new UserLogin();
    })
  }
}
