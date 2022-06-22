export class Review {
    reviewId!: number;
    rating: number;
    review_message: string;
    deleted: boolean;


    constructor() {
        this.rating = 0;
        this.review_message = "";
        this.deleted = false;
    }
}

