import { Component, OnInit } from '@angular/core';
import {Similarity} from "../../models";
import {ApiService} from "../../services/api.service";

@Component({
  selector: 'app-text-similarity',
  templateUrl: './text-similarity.component.html',
  styleUrls: ['./text-similarity.component.css']
})
export class TextSimilarityComponent implements OnInit {

  textOne: string = ''
  textTwo: string = ''

  similarity: Similarity = {
    timeStamp: '',
    time: 0,
    lang: '',
    langconfidence: 0,
    text1: '',
    url1:'',
    text2: '',
    url2:'',
    similarity: 0
  }

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
  }

  checkTextSimilarity(){
    this.apiService.checkSimilarity(localStorage.getItem('token'), this.textOne, this.textTwo).subscribe((similarity) => { this.similarity = similarity;
      console.log(similarity)});
  }
}
