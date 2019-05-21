import { Component, OnInit } from "@angular/core";
import {IParentData} from '../models/parentData';
import {LoginService} from  './../appservices/loginservice.service'

@Component({
  selector: "app-parent3",
  templateUrl: "./parent3.component.html",
  styleUrls: ["./parent3.component.css"]
})
export class Parent3Component implements OnInit {
  constructor(private loginService:LoginService) {}
  message: IParentData;
  ngOnInit() {}

  reveiveMessage(data:IParentData) {
    this.message = data;
  }

  clickMe(){
    this.loginService.myDataServiceData = {name:'Raja Component 1',address:'Hyd 1'};
  }
}
