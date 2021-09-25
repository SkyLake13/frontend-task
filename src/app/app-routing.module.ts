import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { COUNTRIES_ROUTE, COUNTRY_ROUTE } from './constants';

const routes: Routes = [
  { path: '', loadChildren: () => import('./home/home.module').then((m) => m.HomeModule) },
  { path: COUNTRIES_ROUTE, loadChildren: () => import('@country-list/country-list.module').then((m) => m.CountryListModule) },
  { path: COUNTRY_ROUTE, loadChildren: () => import('@country-detail/country-detail.module').then((m) => m.CountryDetailModule) },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
