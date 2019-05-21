import { Component, OnInit } from '@angular/core';
import { UserLogin } from "./../models/login";
import {LoginService} from './../appservices/loginservice.service';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  userList: Array<UserLogin> = new Array<UserLogin>();
  constructor(private loginService:LoginService) { }

  ngOnInit() {
    this.loginService.getAllUser().subscribe((data:Array<UserLogin>)=>{
       this.userList= data
    });
  }

}
