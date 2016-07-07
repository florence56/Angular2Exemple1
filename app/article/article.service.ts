import { Injectable } from '@angular/core';
import { ARTICLES } from './article.mock';
import { Article } from './article';

@Injectable()
export class ArticleService {

    constructor() { }

    public getArticles() {
        return (ARTICLES);
        //return Promise.resolve(CLIENTS);
    }

    public getArticle(id : number) {
        return Promise.resolve(ARTICLES.filter(article => article.id === id));
    }

    public setArticle(article : Article) : boolean {
        return false;
    }

    public  addArticle(article : Article) : boolean {
        return false;
    }

    public suppArticle(article : Article) : boolean {
        return false;
    }

}