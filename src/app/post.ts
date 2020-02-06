export class Post {
    title: string;
    content: string;
    loveIts: number;
    createAt: Date = new Date();


    constructor(title: string, content: string, loveIts: number, createAt: Date) {
        this.title = title;
        this.content = content;
        this.loveIts = loveIts;
        this.createAt = createAt;
    }
}
