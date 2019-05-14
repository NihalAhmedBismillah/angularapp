import { Component, OnInit } from "@angular/core";
import { UserLogin } from "./../models/login";

import { StaticData } from "../constants/staticdata";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  userLogin: UserLogin = new UserLogin();

  constructor() {}
  loginForm = 1;
  content = 1;
  userList: Array<UserLogin> = new Array<UserLogin>();
  countryList = StaticData.countryList;
  userTitle = "nihal ahmed";
  amount = 200.3;
  dataAmount  = 454.78787814;

  ngOnInit() {
    for (let i = 0; i < 10; i++) {
      let user: UserLogin = new UserLogin();
      user.id = i + 1;
      user.address = "203/40 Near BED School Pune India : " + i;
      user.email = "test1@gmail.com: " + i;
      user.mobileNo = "12345" + i;
      user.userName = "Nihal Ahmed: " + i;
      user.dateOfBirth = new Date().toISOString();
      user.salary = 2000 + i + 0.4;
      this.userList.push(user);
    }
  }

  loginClick() {
    if (
      this.userLogin.userName &&
      this.userLogin.password &&
      this.userLogin.userName.toUpperCase() === "NIHAL" &&
      this.userLogin.password.toUpperCase() === "TEST"
    ) {
      alert("Valid User");
    } else {
      alert("Invalid User");
    }
  }

  cancelClick() {
    this.userLogin.password = "";
    this.userLogin.userName = "";
  }

  keyDown(event: KeyboardEvent) {
    debugger;
    console.log("data");
  }
}
