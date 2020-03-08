import {CanActivate} from '@angular/router';
import {Injectable} from '@angular/core';
import {AuthService} from './AuthService';

/**
 * CanActivate：路由守卫
 */
@Injectable()
export class LoggerInGuard implements CanActivate {

  constructor(private authService: AuthService) {}

  /**
   * 控制能否进入路由
   */
  canActivate(): boolean {
    // console.log(this.authService.isLoggedIn())
    return this.authService.isLoggedIn();
  }
}
