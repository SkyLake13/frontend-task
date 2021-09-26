import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import {MatListModule} from '@angular/material/list';

import { CountryDetailRoutingModule } from './country-detail-routing.module';
import { CountryDetailContainerComponent } from './components/country-detail-container/container.component';
import { CountryDetailPresentationComponent } from './components/country-detail-presentation/presentation.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    CountryDetailContainerComponent,
    CountryDetailPresentationComponent
  ],
  imports: [
    CommonModule,
    CountryDetailRoutingModule,
    MatCardModule,
    MatListModule,
    SharedModule
  ]
})
export class CountryDetailModule { }
