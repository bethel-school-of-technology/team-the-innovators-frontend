import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

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

  constructor(private UserService: UserService, private Router: Router) { }

  ngOnInit(): void {
  }

  login() {
    console.log(this.loginForm);
    this.UserService.loginUser(this.loginForm.username, this.loginForm.password).subscribe(myResponseObject => {
      console.log(myResponseObject);
      if(myResponseObject.status === 200){
        // window.alert(myResponseObject.message);
        localStorage.setItem('hotspotsAppToken', myResponseObject.token);
        console.log(myResponseObject.token);
        this.Router.navigate(['/profile']);
      } else {
        window.alert(myResponseObject.message);
      }
    })
  }

}
