import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../services/api.service";
import {History} from "../../models";

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  history: History[] = []

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.history = this.apiService.getHistory()
    console.log(this.history.length)
  }

}

