import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-country-detail-presentation',
  templateUrl: './country-detail-presentation.component.html',
  styleUrls: ['./country-detail-presentation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CountryDetailPresentationComponent {
  @Input()
  public country: any;
}
