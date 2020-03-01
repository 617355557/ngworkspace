import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
  query: string;

  /**
   * @param router 用来跳转
   * @param route 用来获取pathValue
   */
  constructor(private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.query = params.query || '';
    }); // queryParams用来获取url后的参数

    console.log(this.query);
  }

  submit(query1: string): void {
    this.router.navigate(['about', query1], {queryParams: {query: Math.random()}});
  }
}
