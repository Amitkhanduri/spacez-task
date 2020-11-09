import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spacex-footer',
  templateUrl: './spacex-footer.component.html',
  styleUrls: ['./spacex-footer.component.scss']
})
export class SpacexFooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  developerName:string = "Amit khanduri"

}
