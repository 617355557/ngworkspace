import { Component, OnInit } from '@angular/core';
import {AuthService} from '../service/AuthService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  message: string;

  constructor(private authService: AuthService) {
    this.message = '';
  }

  ngOnInit(): void {
  }

  getUser(): any {
    return this.authService.getUser();
  }

  login(username: string, password: string): boolean {
    this.message = '';
    if(!this.authService.login(username, password)) {
      this.message = 'Incorect credentials';
      setTimeout(() => {
        this.message = '';
      }, 2500);
    }
    return false;
  }

  logout(): boolean {
    this.authService.logout();
    location.reload();
    return false;
  }
}
