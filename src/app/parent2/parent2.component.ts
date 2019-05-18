import { Component, OnInit } from '@angular/core';
import {UserLogin  } from "./../models/login";

@Component({
  selector: 'app-parent2',
  templateUrl: './parent2.component.html',
  styleUrls: ['./parent2.component.css']
})
export class Parent2Component implements OnInit {

  constructor() { }

  userData:UserLogin = new UserLogin();
  parentMessage2='Hello I am new property of parent 2'
  ngOnInit() {

    this.userData.address='Pune';
    this.userData.dateOfBirth= new Date().toISOString();
    this.userData.userName  = 'Raja';
    this.userData.mobileNo = '555555';
  }

}
