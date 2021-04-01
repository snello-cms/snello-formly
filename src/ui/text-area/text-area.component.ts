import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'app-text-area',
  template: `
    <div class="p-fluid">
      <div class="p-field">
        <textarea
         [rows]="to.rows"
         [cols]="to.cols" 
         [placeholder]="to.placeholder" 
         pInputTextarea 
         [autoResize]="!!to.autoResize"
         [formControl]="formControl" [formlyAttributes]="field"></textarea>
        </div>
    </div>
  `,
  encapsulation: ViewEncapsulation.None
})
export class TextAreaComponent extends FieldType implements OnInit {

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

}
