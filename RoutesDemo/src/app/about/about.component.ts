import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  id: string;
  param: string;

  // 使用ActivatedRoute获取，路径上的pathValue
  constructor(private route: ActivatedRoute) {
    route.params.subscribe(params => {
      this.id = params.id;
      console.log(this.id);
    });

    route.queryParams.subscribe(params => {
      this.param = params.query;
      console.log(this.param);
    });

    console.log(this.id);
  }

  ngOnInit(): void {
  }
}
