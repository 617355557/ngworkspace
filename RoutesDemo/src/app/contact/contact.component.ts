import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

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
