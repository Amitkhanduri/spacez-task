import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { MissionDetails } from './spacex.model';
import { environment } from './../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class SpacexService {

  constructor(private http: HttpClient) { }


  private baseUrl = environment.spacexBaseUrl;


  getMissionDetails(year: string, isLaunched: string, isLanded: string, limit: number) {
    let informationUrl = `${this.baseUrl}/launches?limit=${limit}`;

    if (isLanded) {
      const landStatus = isLanded === 'Yes' ? true : false;
      informationUrl = informationUrl + `&land_success=${landStatus}`;
    }

    if (year) {
      informationUrl = informationUrl + `&launch_year=${year}`;
    }

    if (isLaunched) {
      const launchStatus = isLaunched === 'Yes' ? true : false;
      informationUrl = informationUrl + `&launch_success=${launchStatus}`;
    }

    
    return this.http.get<MissionDetails[]>(informationUrl);
  }


}
