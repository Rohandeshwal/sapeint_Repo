import { Component, OnInit } from '@angular/core';
import { SpaceXDataService } from '../../shared/spaceXdata.serice';
import { Router } from '@angular/router';

@Component({
  selector: 'app-program-listing',
  templateUrl: './program-listing.component.html',
  styleUrls: ['./program-listing.component.scss'],
})
export class ProgramListingComponent implements OnInit {
  spaceData: any[] = [];
  constructor(
    private sharedService: SpaceXDataService,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.subscribeToSpaceXLaunchData();
  }

  subscribeToSpaceXLaunchData() {
    this.sharedService.spaceXLauchData.subscribe(
      (spaceDataWithFilters: any) => {
        this.spaceData = spaceDataWithFilters;
        console.log('data', spaceDataWithFilters);
      }
    );
  }
}
