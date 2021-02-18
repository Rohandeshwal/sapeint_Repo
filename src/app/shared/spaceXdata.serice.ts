import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { APIService } from '../core/services/api.service';
import { BehaviorSubject } from 'rxjs';
import { SpaceLaunchFilters } from '../components/filter-component/filter-component.component';

@Injectable({
  providedIn: 'root',
})
export class SpaceXDataService {
  private _spaceXLaunchData = new BehaviorSubject([]);
  constructor(private http: APIService) {}

  getSpaceDataForFilters(launchFilters: SpaceLaunchFilters) {
    const urlWithFilters = this.buildURLWithFilters(launchFilters);
    this.http.httpGet(urlWithFilters).subscribe((res) => {
      this.spaceXLauchData = res;
    });
  }

  set spaceXLauchData(value: any) {
    this._spaceXLaunchData.next(value);
  }
  get spaceXLauchData() {
    return this._spaceXLaunchData.asObservable();
  }

  private buildURLWithFilters(launchFilters: SpaceLaunchFilters) {
    let urlWithFilters = environment.APIBase;
    if (launchFilters.launchYear) {
      urlWithFilters = urlWithFilters.concat(
        `&year=${launchFilters.launchYear}`
      );
    }
    if (launchFilters.hasSuccessfulLaunch) {
      urlWithFilters = urlWithFilters.concat(
        `&launch_success=${launchFilters.hasSuccessfulLaunch}`
      );
    }
    if (launchFilters.hasSuccessfulLanding) {
      urlWithFilters = urlWithFilters.concat(
        `&landing_success=${launchFilters.hasSuccessfulLanding}`
      );
    }

    return urlWithFilters;
  }
}
