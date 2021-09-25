import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountryDetailRoutingModule } from './country-detail-routing.module';
import { DetailComponent } from './components/detail/detail.component';
import { CountryDetailPresentationComponent } from './components/country-detail-presentation/country-detail-presentation.component';


@NgModule({
  declarations: [
    DetailComponent,
    CountryDetailPresentationComponent
  ],
  imports: [
    CommonModule,
    CountryDetailRoutingModule
  ]
})
export class CountryDetailModule { }
