import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CODE_PATH_PARAM } from './constants';

const routes: Routes = [
  { path: '', loadChildren: () => import('./home/home.module').then((m) => m.HomeModule) },
  { path: 'countries', loadChildren: () => import('@country-list/country-list.module').then((m) => m.CountryListModule) },
  { path: `:${CODE_PATH_PARAM}`, loadChildren: () => import('@country-detail/country-detail.module').then((m) => m.CountryDetailModule) },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
