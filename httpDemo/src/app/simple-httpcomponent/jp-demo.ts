import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class JpDemo {

  constructor(public httpclient: HttpClient) {

  }

  public _Callback(param: object): void {
    console.log(param);
  }
}
