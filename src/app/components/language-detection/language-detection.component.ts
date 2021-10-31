import { Component, OnInit } from '@angular/core';
import {DetectedLanguages, LanguageDetection} from "../../models";
import {DandelionService} from "../../services/dandelion.service";

@Component({
  selector: 'app-language-detection',
  templateUrl: './language-detection.component.html',
  styleUrls: ['./language-detection.component.css']
})
export class LanguageDetectionComponent implements OnInit {

  text: string = ''
  clean: boolean = false
  language: LanguageDetection = {
    timestamp: '',
    time: 0,
    text: '',
    url: '',
    detectedLangs: []
  }

  constructor(private apiService: DandelionService) { }

  ngOnInit(): void {
  }

  languageDetection(){
    this.apiService.languageDetection(localStorage.getItem('token'),this.text,this.clean).subscribe((detection) =>{
      this.language = detection
    })
  }

}
