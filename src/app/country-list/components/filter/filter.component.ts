import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FilterParams } from '@state/actions';

@Component({
  selector: 'app-country-list-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  @Input()
  public filter: FilterParams | null = null;

  public form!: FormGroup;

  public ngOnInit(): void {
    this.form.patchValue({...this.filter});
  }

  constructor(formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      region: '',
      country: ''
    });
  }
}
