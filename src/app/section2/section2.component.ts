import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section2',
  templateUrl: './section2.component.html',
  styleUrls: ['./section2.component.scss'],
})
export class Section2Component implements OnInit {
  features = [
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi distinctio iusto, perspiciatis mollitia natus harum?',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi distinctio iusto, perspiciatis mollitia natus harum?',
  ];
  constructor() {}

  ngOnInit(): void {}
}
