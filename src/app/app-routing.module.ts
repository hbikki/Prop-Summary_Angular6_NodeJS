import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { DetailComponent } from './detail/detail.component';
import { CompareComponent } from './compare/compare.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
const routes: Routes = [
  {path: 'details/:id/:name', component: DetailComponent}, {path: 'compare/:id', component: CompareComponent},
  {path: '**', component: DashBoardComponent},
]
@NgModule({
  imports: [
   RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
