import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpacexRoutingModule } from './spacex-routing.module';
import { SpacexHomeComponent } from './spacex-home/spacex-home.component';
import { SpacexFilterComponent } from './spacex-filter/spacex-filter.component';
import { SpacexLaunchComponent } from './spacex-launch/spacex-launch.component';
import { SpacexFooterComponent } from './spacex-footer/spacex-footer.component';


@NgModule({
  declarations: [SpacexHomeComponent, SpacexFilterComponent, SpacexLaunchComponent, SpacexFooterComponent],
  imports: [
    CommonModule,
    SpacexRoutingModule
  ]
})
export class SpacexModule { }
