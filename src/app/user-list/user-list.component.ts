import { Component, OnInit } from '@angular/core';
import { UserLogin } from "./../models/login";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  userList: Array<UserLogin> = new Array<UserLogin>();
  constructor() { }

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

}
