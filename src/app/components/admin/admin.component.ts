import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
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
  UserId: number;
  reviewId: number;

  constructor(private UserService: UserService, private Router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.UserService.getUserProfile().subscribe(myResponseObject => {
      console.log(myResponseObject);
      this.currentUser = myResponseObject.user;
    })

    this.reloadUsers();

    this.reloadReviews();

  }

  reloadUsers() {
    this.UserService.allUsers().subscribe(myResponseObject => {
      console.log(myResponseObject);
      this.allUsers = myResponseObject.users;
      console.log(this.allUsers);
    })
  }

  reloadReviews() {
    this.UserService.allReviews().subscribe(myResponseObject => {
      console.log(myResponseObject);
      this.allReviews = myResponseObject.reviews;
      console.log(this.allReviews);
    })
  }

  deleteUserButton(UserId: number) {
    console.log("testing: " + UserId);
    this.UserService.deleteUser(UserId).subscribe(response => {
      console.log(response);
      this.reloadUsers();
    })
  }

  deleteReviewButton(reviewId: number) {
    console.log("testing: " + reviewId);
    this.UserService.deleteReview(reviewId).subscribe(response => {
      console.log(response);
      this.reloadReviews();
    })
  }

}