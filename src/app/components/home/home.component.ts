import { Component, OnInit } from '@angular/core';
import {timeout} from "rxjs/operators";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  token: string;
  constructor() {
    this.token = "";
  }

  ngOnInit(): void {
  }

  submitToken(): void {
    window.localStorage.setItem('token',this.token);
    this.token='';
  }

}
