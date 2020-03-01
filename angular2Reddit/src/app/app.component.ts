import { Component } from '@angular/core';
import {Article} from './article/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  articles: Array<Article>;


  constructor() {
    this.articles = [
      new Article('Angular2', 'htto://angular.io', 3),
      new Article('Fullstack', 'htto://Fullstack.io', 2),
      new Article('Angular2 homepage', 'htto://angular.io', 1),
    ];
  }

  addArtitle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    console.log(`add a article ${title.value} and link ${link.value}`)
    this.articles.push(new Article(title.value, link.value, 0));
    title.value = '';
    link.value = '';
    return false;
  }

  sortedArticles(): Array<Article> {
    return this.articles.sort((a: Article, b: Article) => b.votes - a.votes);
  }
}
