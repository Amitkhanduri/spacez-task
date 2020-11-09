import { Component, OnInit, Input } from '@angular/core';
import { MissionDetails } from '../spacex.model';

@Component({
  selector: 'app-spacex-launch',
  templateUrl: './spacex-launch.component.html',
  styleUrls: ['./spacex-launch.component.scss']
})
export class SpacexLaunchComponent implements OnInit {

  @Input() launchList: MissionDetails[];

  constructor() { }

  ngOnInit(): void {
  }

}
