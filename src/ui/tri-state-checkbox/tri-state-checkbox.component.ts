import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'app-tri-state-checkbox',
  template: `
    <div class="p-formgroup-inline">
      <div class="p-field">
        <p-triStateCheckbox 
        [label]="to.label"
        [formControl]="formControl" [formlyAttributes]="field"></p-triStateCheckbox>
      </div>
    </div>
  `,
  encapsulation: ViewEncapsulation.None
})
export class TriStateCheckboxComponent extends FieldType implements OnInit {

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

}
