import {Component, Input, OnInit} from '@angular/core';
import {SearchResult} from '../yuo-tube-search-component/SearchResult.model';

@Component({
  selector: 'search-result',
  templateUrl: './search-result-component.component.html',
  styleUrls: ['./search-result-component.component.css']
})
export class SearchResultComponentComponent implements OnInit {
  @Input() result: SearchResult;

  constructor() {
  }

  ngOnInit() {
  }

}
