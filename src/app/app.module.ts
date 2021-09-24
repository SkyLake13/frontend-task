import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RestCountriesModule } from './rest-countries';
import { environment } from '../environments/environment';
import { countriesReducer } from './state/reducers/countries.reducer';
import { CountriesEffects } from './state/effects/countries.effects';

const rootReducer = {
  countries: countriesReducer
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
    RestCountriesModule.forRoot(environment.API_BASE_URL)
  ],
  bootstrap: [ AppComponent ],
})
export class AppModule { }



