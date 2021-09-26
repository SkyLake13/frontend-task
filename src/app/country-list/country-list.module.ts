import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatPaginatorModule} from '@angular/material/paginator';


import { CountryListRoutingModule } from './country-list-routing.module';
import { CountryListContainerComponent } from './components/country-list-container/container.component';
import { CountryListPresentationComponent } from './components/country-list-presentation/presentation.component';
import { FilterComponent } from './components/filter/filter.component';
import { CountryPipe } from './country-pipe/country.pipe';


const MATERIAL_MODULES = [
  MatTableModule,
  MatInputModule,
  MatSortModule,
  MatAutocompleteModule,
  MatPaginatorModule
]

@NgModule({
  declarations: [
    CountryListContainerComponent,
    CountryListPresentationComponent,
    FilterComponent, CountryPipe
  ],
  imports: [
    CommonModule,
    CountryListRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ...MATERIAL_MODULES
  ]
})
export class CountryListModule { }
