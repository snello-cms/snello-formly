import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'app-togglebutton',
  template: `
    <div class="p-fluid">
      <div class="p-field">
        <label>{{to.label}}</label>
        <p-toggleButton 
        [onLabel]="to.onLabel"
        [offLabel]="to.offLabel" 
        [onIcon]="to.onIcon || 'pi pi-check'"
        [offIcon]="to.offIcon || 'pi pi-times'"
        [style]="{'width': '10em','margin-left':'3px'}"
        [formControl]="formControl" [formlyAttributes]="field"></p-toggleButton >
        </div>
    </div>
  `,
  encapsulation: ViewEncapsulation.None
})
export class TogglebuttonComponent extends FieldType implements OnInit {

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

}
