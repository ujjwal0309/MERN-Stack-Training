import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-hello-user',
  templateUrl: './app-hello-user.component.html',
  styleUrls: ['./app-hello-user.component.css'],
})
export class AppHelloUserComponent implements OnInit {
  name: string;
  age: number;
  gender: string;

  constructor() {
    this.name = 'ujjwal';
    this.age = 23;
    this.gender = 'M';
  }

  ngOnInit(): void {}
}
