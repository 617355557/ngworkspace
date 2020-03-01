import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpModule, JsonpModule} from '@angular/http';
import { SimpleHTTPComponentComponent } from './simple-httpcomponent/simple-httpcomponent.component';
import {HttpClientModule, HttpClientJsonpModule} from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';
import {JpDemo} from './simple-httpcomponent/jp-demo';
import { YuoTubeSearchComponentComponent } from './yuo-tube-search-component/yuo-tube-search-component.component';
import { SearchBoxComponent } from './search-box/search-box.component';
import { SearchResultComponentComponent } from './search-result-component/search-result-component.component';
import {YouTubeServiceInjectable} from './yuo-tube-search-component/YouTubeService';

@NgModule({
  declarations: [
    AppComponent,
    SimpleHTTPComponentComponent,
    YuoTubeSearchComponentComponent,
    SearchBoxComponent,
    SearchResultComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    HttpClientModule,
    HttpClientJsonpModule,
    JsonpModule
  ],
  providers: [
    JpDemo,
    YouTubeServiceInjectable
  ],
  bootstrap: [YuoTubeSearchComponentComponent]
})
export class AppModule { }
