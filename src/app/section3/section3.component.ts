import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section3',
  templateUrl: './section3.component.html',
  styleUrls: ['./section3.component.scss'],
})
export class Section3Component implements OnInit {
  features = [
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi distinctio iusto, perspiciatis mollitia natus harum?',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi distinctio iusto, perspiciatis mollitia natus harum?',
  ];
  constructor() {}

  ngOnInit(): void {}
}
