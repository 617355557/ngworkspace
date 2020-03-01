import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SearchResult} from './SearchResult.model';
import {Jsonp, JsonpModule} from '@angular/http';

let START_INDEX = 0;
let PAGE_SIZE = 10;
let API_URL = 'http://127.0.0.1:8083/demouser/imgs2';

@Injectable()
export class YouTubeService {
  searchResults: SearchResult[] = new Array<SearchResult>();

  constructor(private http: HttpClient,
              private jsonp: Jsonp,
              @Inject(API_URL) private apiUrl: string,
              @Inject(START_INDEX) private startIndex: number,
              @Inject(PAGE_SIZE) private pageSize: number) {

  }

  search(query: string): SearchResult[] {
    let params = [
      `q=${query}`,
      `startIndex=${this.startIndex}`,
      `pageSize=${this.pageSize}`,
      `part=snippet`,
      `type=video`,
      `maxResults=10`
    ].join('&');
    let queryUrl = `${this.apiUrl}?${params}`;
    this.http.get(queryUrl).subscribe((data: Array<any>) => {
      console.log(data);
      for (let i of data) {
        let searchResult = new SearchResult(i);
        this.searchResults.push(searchResult);
      }
    });
    return this.searchResults;
  }
}

export let YouTubeServiceInjectable: Array<any> = [
  {provide: YouTubeService, useClass: YouTubeService},
  {provide: START_INDEX, useValue: START_INDEX},
  {provide: PAGE_SIZE, useValue: PAGE_SIZE},
  {provide: API_URL, useValue: API_URL}
];
