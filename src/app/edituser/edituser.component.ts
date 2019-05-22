import { Component, OnInit } from '@angular/core';
import { UserLogin } from '../models/login';
import { LoginService } from '../appservices/loginservice.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {
  userLogin: UserLogin = new UserLogin();
  constructor(private router: Router, private loginService: LoginService,
    private route: ActivatedRoute) { }
  successFlag = false;

  ngOnInit() {
    const userId = this.route.snapshot.params['id'];
    this.loginService.getUserById(userId).subscribe((data: UserLogin) => {
      Object.assign(this.userLogin, data);
    })
  }

}
