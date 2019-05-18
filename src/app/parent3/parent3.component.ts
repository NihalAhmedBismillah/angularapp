import { Component, OnInit } from "@angular/core";
import {IParentData} from '../models/parentData';
@Component({
  selector: "app-parent3",
  templateUrl: "./parent3.component.html",
  styleUrls: ["./parent3.component.css"]
})
export class Parent3Component implements OnInit {
  constructor() {}
  message: IParentData;
  ngOnInit() {}

  reveiveMessage(data:IParentData) {
    this.message = data;
  }
}
