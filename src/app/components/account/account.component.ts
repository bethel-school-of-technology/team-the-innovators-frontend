import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Review } from 'src/app/models/review';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  currentUser: User = new User();
  currentReview: Review = new Review();
  public userReviews: Review[] = [];
  UserId: number;
  ReviewId: number;

  constructor(private UserService: UserService, private Router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.UserService.getUserProfile().subscribe(myResponseObject => {
      console.log(myResponseObject);
      this.currentUser = myResponseObject.user;
      if (myResponseObject.user.Admin) {
        this.Router.navigate(['/admin']);
      }
    })

    this.UserService.userReviews().subscribe(myResponseObject => {
      console.log(myResponseObject);
      this.userReviews = myResponseObject.reviews;
      console.log(this.userReviews);
    })

  }

}
