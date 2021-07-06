import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BusinessnewsComponent } from './businessnews/businessnews.component';
import { HeaderComponent } from './header/header.component';
import { TechnewsComponent } from './technews/technews.component';

const routes: Routes = [
  {path : '' , component: HeaderComponent}, //home
  {path : 'tech', component : TechnewsComponent}, //Tech
  {path : 'business', component : BusinessnewsComponent}, //business
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
