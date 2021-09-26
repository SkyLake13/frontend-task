import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { COUNTRY_ROUTE } from 'src/app/constants';

@Component({
  selector: 'app-country-detail-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CountryDetailPresentationComponent {
  @Input()
  public country: any;

  public country_route = COUNTRY_ROUTE;
}
