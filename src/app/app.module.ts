import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { RestCountriesModule } from '@rest-countries';
import { countriesReducer, CountriesEffects, filterReducer } from '@state';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';



const rootReducer = {
  countries: countriesReducer,
  filter: filterReducer
};

const NGRX_MODULES = [
  StoreModule.forRoot(rootReducer),
  EffectsModule.forRoot([
    CountriesEffects
  ])
]

const MATERIAL_MODULES = [
  MatToolbarModule,
  MatIconModule,
  MatButtonModule
]

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ...MATERIAL_MODULES,
    ...NGRX_MODULES,
    ...environment.imports,
    RestCountriesModule.forRoot(environment.API_BASE_URL),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  bootstrap: [ AppComponent ],
})
export class AppModule { }



