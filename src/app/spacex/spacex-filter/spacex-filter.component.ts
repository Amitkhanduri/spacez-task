import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

import { SUCCESSFULLLAUNCH, SUCCESSFULLLANDING, MISSIONYEARS } from '../spacex.constants';
import { Filters } from '../spacex.model';

@Component({
  selector: 'app-spacex-filter',
  templateUrl: './spacex-filter.component.html',
  styleUrls: ['./spacex-filter.component.scss']
})
export class SpacexFilterComponent implements OnInit {

  @Input() launchedYear: number;
  @Input() isLaunched: string;
  @Input() isLanded: string;
  @Output() applySpaceFilters = new EventEmitter();

  years: Array<Filters>;
  launchValues: Array<Filters>;
  landingValues: Array<Filters>;

  constructor() {}

  ngOnInit() {
    this.launchValues = SUCCESSFULLLAUNCH;
    this.landingValues = SUCCESSFULLLANDING;
    this.years = MISSIONYEARS;
  }

  applyFilter(field: string, selectedYear: Filters, propertyName: string) {
    this.genericMap(field, selectedYear);
    this.applySpaceFilters.emit({
      propertyName: propertyName,
      selection: selectedYear,
    });
  }

  genericMap(field: string, selectedProperty: any) {
    this[field].map((property) => {
      property.isSelected =
        property.value === selectedProperty.value
          ? !property.isSelected
          : false;
    });
  }

}
