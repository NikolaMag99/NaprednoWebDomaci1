import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import {HomeComponent} from "./components/home/home.component";
import {FormsModule} from "@angular/forms";
import { TokenComponent } from './components/token/token.component';
import { HistoryComponent } from './components/history/history.component';
import { TextSimilarityComponent } from './components/text-similarity/text-similarity.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TokenComponent,
    HistoryComponent,
    TextSimilarityComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
