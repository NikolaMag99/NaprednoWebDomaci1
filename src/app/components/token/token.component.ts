import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-token',
  templateUrl: './token.component.html',
  styleUrls: ['./token.component.css']
})
export class TokenComponent implements OnInit {

  token: any

  constructor() {
    if (localStorage.getItem('token') == 'false' || localStorage.getItem('token') == null) {
      this.token = ''
    } else {
      this.token = localStorage.getItem('token')
    }
  }

  ngOnInit(): void {
  }

  getToken(): string {
    return this.token
  }

  setToken(value: HTMLInputElement): void {
    localStorage.setItem('token', value.value)
    this.token = value.value
  }

  changeToken(value: HTMLInputElement): void {
    localStorage.setItem('token', value.value)
    this.token = value.value
  }


}
