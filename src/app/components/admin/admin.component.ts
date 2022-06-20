import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  currentUser: User = new User();

  constructor(private UserService: UserService, private Router: Router) { }

  ngOnInit(): void {
      this.UserService.getUserProfile().subscribe(myResponseObject => {
        console.log(myResponseObject);
        this.currentUser = myResponseObject.user;
      })
  }

}