import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  newUser: User = new User();

  constructor(private myUserService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  createNew(){
    this.myUserService.createUser(this.newUser).subscribe(response => {
      console.log(response)
      this.router.navigate(["/login"]);
    })
  }

}
