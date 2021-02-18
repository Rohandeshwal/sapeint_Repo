import { Component, Input, OnInit } from '@angular/core';
import { SpaceXDataService } from '../../shared/spaceXdata.serice';
import { Router } from '@angular/router';

// todo: cleanup by placing in seprate folder
export class SpaceLaunchFilters {
  launchYear = 2021;
  hasSuccessfulLaunch = null;
  hasSuccessfulLanding = null;
  limit = 100;
}

@Component({
  selector: 'app-filter-component',
  templateUrl: './filter-component.component.html',
  styleUrls: ['./filter-component.component.scss'],
})
export class FilterComponentComponent implements OnInit {
  spaceData: any;
  years: number[];
  spaceLaunchFilters = new SpaceLaunchFilters();

  shareDataState: any;
  constructor(
    private spaceXDataService: SpaceXDataService,
    private route: Router
  ) {
    this.years = this.getLast15Years();
  }
  ngOnInit(): void {
    this.spaceXDataService.getSpaceDataForFilters(this.spaceLaunchFilters);
  }

  private getLast15Years() {
    let years = [];
    let currentYear = new Date().getFullYear();
    for (let i = currentYear; i >= currentYear - 15; i--) {
      years.push(i);
    }
    return years;
  }

  applyFilter(type: any, value: any) {
    switch (type) {
      case 'year':
        this.spaceLaunchFilters.launchYear = value;
        debugger
        break;
      case 'successLaunch':
        this.spaceLaunchFilters.hasSuccessfulLaunch = value;
        break;
      case 'successLanding':
        this.spaceLaunchFilters.hasSuccessfulLanding = value;
        break;
      default:
        console.log('Wrong filter applied.');
    }
    this.spaceXDataService.getSpaceDataForFilters(this.spaceLaunchFilters);
  }
}
