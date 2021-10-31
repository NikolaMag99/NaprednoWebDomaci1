import { Component, OnInit } from '@angular/core';
import {DandelionService} from "../../services/dandelion.service";
import {History} from "../../models";

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  history: History[] = []

  constructor(private apiService: DandelionService) { }

  ngOnInit(): void {
    this.history = this.apiService.getHistory()
    console.log(this.history.length)
  }

}

