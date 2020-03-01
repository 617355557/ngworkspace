import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

import {JpDemo} from './jp-demo';

@Component({
  selector: 'app-simple-httpcomponent',
  templateUrl: './simple-httpcomponent.component.html',
  styleUrls: ['./simple-httpcomponent.component.css']
})
export class SimpleHTTPComponentComponent implements OnInit {

  data: object;

  loading: boolean;

  url: string;

  /**
   *
   * @param http
   * http: Http
   * constructor(private http: Http) {
   *  this.http = http;
   *  }
   * @param http2
   * @param jsonp
   */
  constructor(private http2: HttpClient, private jpdemo: JpDemo) {
    // http://gank.io/api/data/福利/10/1
    this.url = 'http://jsonplaceholder.typicode.com/posts/1';
    // this.url = 'http://r.qzone.qq.com/cgi-bin/user/cgi_personal_card?uin=QQ';
    // this.url = 'http://a.itying.com/api/productlist';
  }

  ngOnInit() {
  }

  makeRequest(): void {
    this.loading = true;
    this.http2.get(this.url).subscribe(data => {
        console.log(data)
        this.data = data;
        this.loading = false;
    });

    // this.http2.jsonp(this.url, '_Callback').subscribe(response => {
    //   console.log(response);
    //   this.data = response;
    //   this.loading = false;
    // });

    // this.http2.jsonp(this.url, '_Callback');
  }

  // _Callback(txt: object): void {
  //   console.log(txt);
  // }
}
