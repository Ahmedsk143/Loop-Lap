import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section1',
  templateUrl: './section1.component.html',
  styleUrls: ['./section1.component.scss'],
})
export class Section1Component implements OnInit {
  features = [
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi distinctio iusto, perspiciatis mollitia natus harum?',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi distinctio iusto, perspiciatis mollitia natus harum?',
  ];
  constructor() {}

  ngOnInit(): void {}
}
