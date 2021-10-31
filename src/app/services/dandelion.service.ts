import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {History, LanguageDetection, Similarity} from "../models";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class DandelionService {
  private history: History[] = []
  private token: string = "";


  constructor(private httpClient: HttpClient) {
  }

  getHistory(): History[] {
    return this.history
  }

  checkSimilarity(token: any, textOne: string, textTwo: string): Observable<Similarity> {
    this.setToken();
    this.history.push({
      timestamp: '[' + new Date().toISOString() + ']',
      method: 'GET',
      url: environment.textSimilarityUrl + '?text1=' + textOne + '&text2=' + textTwo + '&token=' + token
    });
    return this.httpClient.get<Similarity>(environment.textSimilarityUrl + '?text1=' + textOne + '&text2=' + textTwo + '&token=' + token)
  }

  setToken() {
    const userToken = window.localStorage.getItem('token');
    this.token = (userToken !== null) ? userToken : this.token;
    console.log(this.token);
  }

  languageDetection(token: any, text: string, clean: boolean): Observable<LanguageDetection> {
    if (clean) {
      this.history.push({
        timestamp: '[' + new Date().toISOString() + ']',
        method: 'GET',
        url: environment.langDetectionUrl + '?clean=true&text=' + text + '&token=' + token
      });
      return this.httpClient.get<LanguageDetection>(environment.langDetectionUrl + '?clean=true&text=' + text + '&token=' + token)
    } else {
      this.history.push({
        timestamp: '[' + new Date().toISOString() + ']',
        method: 'GET',
        url: environment.langDetectionUrl + '?text=' + text + '&token=' + token
      });
      return this.httpClient.get<LanguageDetection>(environment.langDetectionUrl + '?text=' + text + '&token=' + token)
    }
  }

}
