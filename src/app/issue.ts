export class Issue {
    public id: number;
    public title: string;
    public comments: string[];
    public user: object;
    public body: string;
    constructor() {
        this.id = Math.random() * (100000 - 500) + 500;
        this.comments = [];
        this.user = { login: 'Unknown', avatar_url: 'https://pp.userapi.com/c626421/v626421094/2f8b/XrJWtAPVxe4.jpg' };
    }
}
