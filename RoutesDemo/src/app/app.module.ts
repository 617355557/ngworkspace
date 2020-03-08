import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {APP_BASE_HREF, HashLocationStrategy, LocationStrategy, PathLocationStrategy} from '@angular/common';
import { LoginComponent } from './login/login.component';
import {childRoutes, ProtectedComponent} from './protected/protected.component';
import {LoggerInGuard} from './service/LoggerInGuard';
import {AUTH_PROVIDERS} from './service/AuthService';
import { MainComponent } from './main/main.component';
import { IdComponent } from './id/id.component';

// 定义一个路由
const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home/:id', component: HomeComponent}, //  path/:id，/:id方式是用来配置路由参数
  {path: 'about/:id', component: AboutComponent},
  {path: 'contact/:id', component: ContactComponent},
  {path: 'contactus', redirectTo: 'contact'},
  {path: 'protected', component: ProtectedComponent, children: childRoutes} // children：子路由
  // {path: 'protected', component: ProtectedComponent, canActivate: [LoggerInGuard]},
];

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent,
    ProtectedComponent,
    MainComponent,
    IdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes) // 安装路由配置
  ],
  providers: [
    // {provide: LocationStrategy, useClass: HashLocationStrategy},  // 路由策略，LocationStrategy是锚点标记策略。PathLocationStrategy是默认路由策略，是HTML5路由
    {provide: APP_BASE_HREF, useValue: '/app'},  // 相当于 <base href="/app">
    // auth模块相关
    AUTH_PROVIDERS, // 认证保护
    LoggerInGuard // 守卫路由
  ],
  bootstrap: [DemoComponent]
})
export class AppModule { }

// platformBrowserDynamic().bootstrapModule(AppModule).catch((err: any) => console.log(err));
