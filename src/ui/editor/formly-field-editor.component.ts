/* tslint:disable:component-class-suffix component-selector */
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'editor-type',
  template: `
    <p-editor [(ngModel)]="editorText" (ngModelChange)="onModelChange()"
              [style]="{'height':'320px'}"></p-editor>
  `,
  encapsulation: ViewEncapsulation.None
})

export class FormlyFieldEditorComponent extends FieldType implements OnInit {
  editorText = '';

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

  onModelChange(): void {
    this.field.formControl.setValue(this.editorText);
  }
}
