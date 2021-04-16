import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  features = [
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui, voluptates veniam sed sit sunt praesentium.',
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui, voluptates veniam sed sit sunt praesentium.',
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui, voluptates veniam sed sit sunt praesentium.',
  ];
  constructor() {}

  ngOnInit(): void {}
}
