export class User {
    id!: number;
    first_name: string;
    last_name: string;
    username: string;
    email: string;
    password: string;
    bio: string;
    posts: string;

    constructor() {
        this.first_name = "";
        this.last_name = "";
        this.username = "";
        this.email = "";
        this.password = "";
        this.bio = "";
        this.posts = "";
    }
}
