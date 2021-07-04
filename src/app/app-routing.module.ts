import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { TechnewsComponent } from './technews/technews.component';

const routes: Routes = [
  {path : '' , component: HeaderComponent}, //home
  {path : 'tech', component : TechnewsComponent}, //Tech
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
