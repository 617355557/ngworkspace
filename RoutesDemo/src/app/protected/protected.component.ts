import { Component, OnInit } from '@angular/core';
import {Routes} from '@angular/router';
import {MainComponent} from '../main/main.component';
import {IdComponent} from '../id/id.component';

@Component({
  selector: 'app-protected',
  templateUrl: './protected.component.html',
  styleUrls: ['./protected.component.css']
})
export class ProtectedComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

export const childRoutes: Routes = [
  {path: '', redirectTo: 'main', pathMatch: 'full'},
  {path: 'main', component: MainComponent},
  {path: 'id', component: IdComponent}
]
