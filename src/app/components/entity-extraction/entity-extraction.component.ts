import { Component, OnInit } from '@angular/core';
import {DandelionService} from "../../services/dandelion.service";
import {EntityExtractions} from "../../models";

@Component({
  selector: 'app-entity-extraction',
  templateUrl: './entity-extraction.component.html',
  styleUrls: ['./entity-extraction.component.css']
})
export class EntityExtractionComponent implements OnInit {


  text: string = ''
  confidence: number = 0
  include1: boolean = false
  include2: boolean = false
  include3: boolean = false
  includes: string[] = []


  extraction: EntityExtractions = {
    annotations: []
  }
  constructor(private dandelionService: DandelionService) {
  }

  ngOnInit(): void {
  }

  entityExtraction() {
    this.includes = []
    if(this.include1 == true) this.includes.push('image')
    if(this.include2 == true) this.includes.push('abstract')
    if(this.include3 == true) this.includes.push('categories')
    console.log(this.includes.length)
    this.dandelionService.entityExtraction(localStorage.getItem('token'), this.text, this.confidence, this.includes).subscribe((entities) =>{
      this.extraction = entities
    });
  }
}
