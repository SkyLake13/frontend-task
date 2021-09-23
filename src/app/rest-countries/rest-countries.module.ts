import { ModuleWithProviders, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { API_BASE_URL, API_CLIENT } from './injection-tokens';
import { ClientService } from './service/client.service';

@NgModule({
  imports: [
    HttpClientModule
  ]
})
export class RestCountriesModule {
  public static forRoot(apiBaseUrl: string): ModuleWithProviders<RestCountriesModule> {
    return {
      ngModule: RestCountriesModule,
      providers: [
        {
          provide: API_BASE_URL,
          useValue: apiBaseUrl
        },
        {
          provide: API_CLIENT,
          useClass: ClientService
        }
      ]
    }
  }
}
