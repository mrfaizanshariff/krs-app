import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ActivitiesComponent } from './activities/activities.component';
import { AmenitiesComponent } from './amenities/amenities.component';
import { AgmCoreModule } from '@agm/core';
import { ReviewComponent } from './review/review.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    CarouselComponent,
    ActivitiesComponent,
    AmenitiesComponent,
    ReviewComponent
  ],
  imports: [
    AgmCoreModule.forRoot({
      apiKey:"AIzaSyDKr2qIsEVmAmxZRZKZpK7eCO3XKeKlOSE"
    }),
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
