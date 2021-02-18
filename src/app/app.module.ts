import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FilterComponentComponent } from './components/filter-component/filter-component.component';
                                          
import { ProgramListingComponent } from  './components/program-listing/program-listing.component';
import { LaunchProgramsComponent } from './pages/launch-programs/launch-programs.component';
import { SharedModule } from './shared/shared.module';
import {NgHttpLoaderModule} from "ng-http-loader"

@NgModule({
  declarations: [
    AppComponent,
    FilterComponentComponent,
    ProgramListingComponent,
    LaunchProgramsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,SharedModule,HttpClientModule,NgHttpLoaderModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
