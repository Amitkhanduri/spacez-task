import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpacexHomeComponent } from './spacex-home/spacex-home.component';

const routes: Routes = [
  {path:'', redirectTo:'main', pathMatch: 'full'},
  {path:'main', component:SpacexHomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpacexRoutingModule { }
