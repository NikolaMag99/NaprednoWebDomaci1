import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {History, Similarity} from "../models";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private history: History[] = []
  private token: string = "";



  constructor(private httpClient: HttpClient) {}

  getHistory(): History[]{
    return this.history
  }

  checkSimilarity(token: any, textOne: string, textTwo: string) {
    this.setToken();
    this.history.push({timestamp: '[' + new Date().toISOString() + ']', method: 'GET', url: environment.textSimilarityUrl +'?text1=' + textOne + '&text2=' + textTwo + '&token=' + token});
    return this.httpClient.get<Similarity>(environment.textSimilarityUrl +'?text1=' + textOne + '&text2=' + textTwo + '&token=' + token)
  }

  setToken() {
    const userToken=window.localStorage.getItem('token');
    this.token=(userToken!==null)?userToken:this.token;
    console.log(this.token);
  }

}
