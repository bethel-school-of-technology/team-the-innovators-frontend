export class Review {
    reviewId: number;
    rating: number;
    placePlaceId: number;
    review_message: string;
    deleted: boolean;
  reviews: Review[];


    constructor() {
        this.rating = 0;
        this.review_message = "";
        this.deleted = false;
    }
}

