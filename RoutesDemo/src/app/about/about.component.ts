import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  id: string;

  // 使用ActivatedRoute获取，路径上的pathValue
  constructor(private route: ActivatedRoute) {
    route.params.subscribe(params => {
      this.id = params.id;
    });
  }

  ngOnInit(): void {
  }

}
