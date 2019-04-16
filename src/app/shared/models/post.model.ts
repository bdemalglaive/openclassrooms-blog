import {$t} from 'codelyzer/angular/styles/chars';

export class Post {
    title: string;
    content: string;
    loveIts: number;
    createdAt: Date;

    constructor(title, content, loveIts = 0) {
        this.title = title;
        this.content = content;
        this.loveIts = loveIts;
        this.createdAt = new Date();
    }
}
