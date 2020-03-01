import {Component, Inject, OnInit} from '@angular/core';
import {SearchResult} from './SearchResult.model';

@Component({
  selector: 'yuotube-search',
  templateUrl: './yuo-tube-search-component.component.html',
  styleUrls: ['./yuo-tube-search-component.component.css']
})
export class YuoTubeSearchComponentComponent implements OnInit {

  results: SearchResult[];

  constructor() {
  }

  ngOnInit() {
  }

  updateResults(results: SearchResult[]): void {
    this.results = results;
  }
}
