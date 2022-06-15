export class User {
    id!: number;
    FirstName: string;
    LastName: string;
    Username: string;
    Email: string;
    Password: string;
    Bio: string;
    Reviews: string;

    constructor() {
        this.FirstName = "";
        this.LastName = "";
        this.Username = "";
        this.Email = "";
        this.Password = "";
        this.Bio = "";
        this.Reviews = "";
    }
}
