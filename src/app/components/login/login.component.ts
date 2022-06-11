import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = {
    username: "",
    password: ""
  }

  constructor(private UserService: UserService) { }

  ngOnInit(): void {
  }

  login() {
    console.log(this.loginForm);
    this.UserService.loginUser(this.loginForm.username, this.loginForm.password).subscribe(myResponseObject => {
      console.log(myResponseObject);
    })
  }

}
