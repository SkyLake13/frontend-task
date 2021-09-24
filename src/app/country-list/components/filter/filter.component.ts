import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-country-list-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {
  constructor(formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      region: '',
      country: ''
    });
  }

  public form: FormGroup;
}
