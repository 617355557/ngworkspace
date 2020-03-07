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

// 定义一个路由
const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home/:id', component: HomeComponent}, //  path/:id，/:id方式是用来配置路由参数
  {path: 'about/:id', component: AboutComponent},
  {path: 'contact/:id', component: ContactComponent},
  {path: 'contactus', redirectTo: 'contact'}
];

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes) // 安装路由配置
  ],
  providers: [
    // {provide: LocationStrategy, useClass: HashLocationStrategy},  // 路由策略，LocationStrategy是锚点标记策略。PathLocationStrategy是默认路由策略，是HTML5路由
    {provide: APP_BASE_HREF, useValue: '/app'}  // 相当于 <base href="/app">
  ],
  bootstrap: [DemoComponent]
})
export class AppModule { }

// platformBrowserDynamic().bootstrapModule(AppModule).catch((err: any) => console.log(err));
