import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountryDetailRoutingModule } from './country-detail-routing.module';
import { CountryDetailContainerComponent } from './components/country-detail-container/container.component';
import { CountryDetailPresentationComponent } from './components/country-detail-presentation/presentation.component';


@NgModule({
  declarations: [
    CountryDetailContainerComponent,
    CountryDetailPresentationComponent
  ],
  imports: [
    CommonModule,
    CountryDetailRoutingModule
  ]
})
export class CountryDetailModule { }
