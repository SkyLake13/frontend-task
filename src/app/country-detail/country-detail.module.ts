import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

import { CountryDetailRoutingModule } from './country-detail-routing.module';
import { CountryDetailContainerComponent } from './components/country-detail-container/container.component';
import { CountryDetailPresentationComponent } from './components/country-detail-presentation/presentation.component';
import { BorderedCountryComponent } from './components/bordered-country/bordered-country.component';



@NgModule({
  declarations: [
    CountryDetailContainerComponent,
    CountryDetailPresentationComponent,
    BorderedCountryComponent
  ],
  imports: [
    CommonModule,
    CountryDetailRoutingModule,
    MatCardModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule
  ]
})
export class CountryDetailModule { }
