import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {EntityExtractions, History, LanguageDetection, SentimentAnalysis, Similarity} from "../models";
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

  sentimentAnalysis(token: any, text: string, lang: string): Observable<SentimentAnalysis> {
    this.history.push({
      timestamp: '[' + new Date().toISOString() + ']',
      method: 'GET',
      url: environment.sentimentAnalysis + '?lang=' + lang + '&text=' + text + '&token=' + token
    });
    console.log(environment.sentimentAnalysis + '?lang=' + lang + '&text=' + text + '&token=' + token)
    return this.httpClient.get<SentimentAnalysis>(environment.sentimentAnalysis + '?lang=' + lang + '&text=' + text + '&token=' + token)
  }

  entityExtraction(token: any, text: string, confidence: number, include: string[]): Observable<EntityExtractions> {
    let build: string = ''
    for (const word of include) {
      build += word + ','
    }
    let arr = build.substring(0, build.length - 1)
    this.history.push({
      timestamp: '[' + new Date().toISOString() + ']',
      method: 'GET',
      url: environment.entityExtractionUrl + '?min_confidence=' + confidence + '&?lang=en&text=' + text + '&include=' + arr + '&token=' + token
    });
    return this.httpClient.get<EntityExtractions>(environment.entityExtractionUrl + '?min_confidence=' + confidence + '&?lang=en&text=' + text + '&include=' + arr + '&token=' + token)
  }

}
