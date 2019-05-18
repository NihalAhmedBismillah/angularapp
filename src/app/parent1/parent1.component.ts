import { Component, OnInit } from "@angular/core";
import {UserLogin  } from "./../models/login";

@Component({
  selector: "app-parent1",
  templateUrl: "./parent1.component.html",
  styleUrls: ["./parent1.component.css"]
})
export class Parent1Component implements OnInit {
  constructor() {}

  userData:UserLogin = new UserLogin();
  ngOnInit() {

    this.userData.address='Pune';
    this.userData.dateOfBirth= new Date().toISOString();
    this.userData.userName  = 'Raja';
    this.userData.mobileNo = '555555';
  }
}
