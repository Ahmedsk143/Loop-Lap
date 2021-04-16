import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  navs = ['home', 'explore', 'create', 'share'];
  show = false;
  constructor() {}

  ngOnInit(): void {}

  scroll(nav: string) {
    document.getElementById(nav).scrollIntoView({ behavior: 'smooth' });
  }
}
