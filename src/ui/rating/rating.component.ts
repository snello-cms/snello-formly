import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'app-rating',
  template: `
    <div class="p-formgroup-inline">
      <div class="p-field-checkbox">
        <p-rating  
        [cancel]="!!to.cancel" 
        [readonly]="!!to.readonly" 
        [stars]="to.starts || 5"
        [formControl]="formControl" [formlyAttributes]="field"></p-rating>
        <label>{{to.label}}</label>
        </div>
    </div>
  `,
  encapsulation: ViewEncapsulation.None
})
export class RatingComponent extends FieldType implements OnInit {

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

}
