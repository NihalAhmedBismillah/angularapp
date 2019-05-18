import { Component, OnInit, Input } from "@angular/core";
import { UserLogin } from "./../models/login";

@Component({
  selector: "app-child1",
  templateUrl: "./child1.component.html",
  styleUrls: ["./child1.component.css"]
})
export class Child1Component implements OnInit {
  constructor() {}
  @Input() userData: UserLogin;
  @Input() childMessage: string;
  ngOnInit() {}
}
