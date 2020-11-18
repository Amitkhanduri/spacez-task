import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { MissionDetails } from './../spacex.model';
import { SpacexService } from './../spacex.service';

@Component({
  selector: 'app-spacex-home',
  templateUrl: './spacex-home.component.html',
  styleUrls: ['./spacex-home.component.scss']
})
export class SpacexHomeComponent implements OnInit {

  constructor(private spaceService:SpacexService,
    private route: ActivatedRoute,
    private router: Router)
  { }

  ngOnInit(): void {
    this.getMissionParameters();
  }

  public launchedYear: string;
  public isLaunched: string;
  public isLanded: string;
  public recordLimit: number;
  public launchList: MissionDetails[] = [];  
  public appTitle:string = "SpaceX Launch Programs";


  getMissionParameters() {
    this.recordLimit = 100;
    this.route.queryParamMap.subscribe((params) => {
      this.launchedYear = params.get('year');
      this.isLanded = params.get('landSucess');
      this.isLaunched = params.get('launchSucess');
      this.missionList();
    });
  }

  applySpaceFilters(payload) {
    this.genericFilter(payload);
  }

  genericFilter(payload) {
    this[payload.propertyName] = payload.selection.isSelected
      ? payload.selection.value
      : undefined;
    this.goToFiltersPage();
    this.missionList();
  }

  goToFiltersPage() {
    this.router.navigate(['/space/main'], {
      queryParams: {
        year: this.launchedYear,
        launchSucess: this.isLaunched,
        landSucess: this.isLanded,
      },
    });
  }


  missionList() {
    this.spaceService.getMissionDetails(this.launchedYear,this.isLaunched,this.isLanded,this.recordLimit)
    .subscribe((data: MissionDetails[]) => (this.launchList = data || []));
  }



}
