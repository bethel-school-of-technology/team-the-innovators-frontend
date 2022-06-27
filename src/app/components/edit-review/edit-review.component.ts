import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Review } from 'src/app/models/review';

@Component({
  selector: 'app-edit-review',
  templateUrl: './edit-review.component.html',
  styleUrls: ['./edit-review.component.css']
})
export class EditReviewComponent implements OnInit {

  constructor(private UserService: UserService, private Router: Router, private route: ActivatedRoute) { }

  editedReview: Review = new Review();
  reviewId: number;

  ngOnInit(): void {
    this.reviewId = parseInt(this.route.snapshot.paramMap.get('id'));
    console.log(this.reviewId);

    this.UserService.reviewById(this.reviewId).subscribe(response => {
      console.log(response);
      this.editedReview = response;
    })
  }

  editReviewButton() {
    this.UserService.editReview(this.reviewId, this.editedReview).subscribe(response => {
      console.log(response);
      this.Router.navigate(["/profile"]);
    })
  }

}
