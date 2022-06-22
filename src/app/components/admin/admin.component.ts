import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { Review } from 'src/app/models/review';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  currentUser: User = new User();
  public allUsers: User[] = [];
  public allReviews: Review[] = [];

  constructor(private UserService: UserService, private Router: Router) { }

  ngOnInit(): void {
      this.UserService.getUserProfile().subscribe(myResponseObject => {
        console.log(myResponseObject);
        this.currentUser = myResponseObject.user;
      })

      this.UserService.allUsers().subscribe(myResponseObject => {
        console.log(myResponseObject);
        this.allUsers = myResponseObject.users;
        console.log(this.allUsers);
      })

      this.UserService.allReviews().subscribe(myResponseObject => {
        console.log(myResponseObject);
        this.allReviews = myResponseObject.reviews;
        console.log(this.allReviews);
      })
  }

}