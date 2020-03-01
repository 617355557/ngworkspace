import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

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
