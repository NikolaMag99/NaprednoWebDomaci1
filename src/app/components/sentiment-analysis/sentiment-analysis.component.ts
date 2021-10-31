import { Component, OnInit } from '@angular/core';
import {SentimentAnalysis} from "../../models";
import {DandelionService} from "../../services/dandelion.service";

@Component({
  selector: 'app-sentiment-analysis',
  templateUrl: './sentiment-analysis.component.html',
  styleUrls: ['./sentiment-analysis.component.css']
})
export class SentimentAnalysisComponent implements OnInit {

  text: string = ''
  lang: string = ''
  green:number;
  red:number;
  score:number;
  type:string="";

  sentimentAnalysis: SentimentAnalysis = {
    timestamp: '',
    time: 0,
    lang: '',
    sentiment: {
      score: 0,
      type: ''
    }
  }

  constructor(private dandelionService: DandelionService) {
    this.text='';
    this.lang='auto'
    this.green=255;
    this.score=-1.1;
    this.red=255;
  }

  ngOnInit(): void {
  }

  senAnalysis() {
    this.dandelionService.sentimentAnalysis(localStorage.getItem('token'), this.text,this.lang).subscribe((analysis) => {
      this.sentimentAnalysis = analysis
      const normalizedScore=this.normalizeRange(this.sentimentAnalysis.sentiment.score);
      this.red=255*(1-normalizedScore);
      this.green=255*normalizedScore;
      this.type=this.sentimentAnalysis.sentiment.type;
      this.score=this.sentimentAnalysis.sentiment.score;
    });
  }


  getColorString() {
    const color:string=`rgb(${this.red},${this.green},0)`;
    return color;
  }

  private normalizeRange(x:any):number{
    return (x + 1) / 2;
  }

}
