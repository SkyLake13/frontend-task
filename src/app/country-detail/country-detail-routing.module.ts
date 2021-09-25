import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CODE_PATH_PARAM } from '../constants';
import { CountryDetailContainerComponent } from './components/country-detail-container/container.component';

const routes: Routes = [
  { path: `:${CODE_PATH_PARAM}`, component: CountryDetailContainerComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CountryDetailRoutingModule { }
