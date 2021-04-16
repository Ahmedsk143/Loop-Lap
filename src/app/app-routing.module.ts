import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { Section1Component } from './section1/section1.component';
import { Section2Component } from './section2/section2.component';
import { Section3Component } from './section3/section3.component';

const routes: Routes = [
  { path: 'home', component: HeaderComponent },
  { path: 'explore', component: Section1Component },
  { path: 'create', component: Section2Component },
  { path: 'share', component: Section3Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
