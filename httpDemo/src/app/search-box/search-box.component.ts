import {Component, ElementRef, EventEmitter, OnInit, Output} from '@angular/core';
import {YouTubeService} from '../yuo-tube-search-component/YouTubeService';
import {fromEvent} from 'rxjs';
import {debounceTime, filter, map, switchAll} from 'rxjs/operators';
import {SearchResult} from '../yuo-tube-search-component/SearchResult.model';

@Component({
  selector: 'search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {

  @Output() loading: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() results: EventEmitter<SearchResult[]> = new EventEmitter<SearchResult[]>();

  constructor(public youtube: YouTubeService,
              private el: ElementRef) {

  }

  ngOnInit(): void {
    fromEvent(this.el.nativeElement, 'keyup')
      .subscribe((data: any) => {
        // filter(
        //   (value: any) => value.key > 1      // 过滤忽略长度小于1的时候的输入请求
        // );
        // debounceTime(10000); // 忽略触发间隔小于10s的请求
        console.log(data.target.value);
        this.loading.next(true);                  // 显示loading

        let results: SearchResult[] = this.youtube.search(data.target.value);
        this.loading.next(false); // 隐藏loading
        this.results.next(results); // 将结果从事件中传出
        switchAll();  // 清空除了最近一次的请求
      });
  }

}
