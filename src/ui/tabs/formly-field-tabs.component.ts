import {Component} from '@angular/core';
import {FieldType, FormlyFieldConfig} from '@ngx-formly/core';

@Component({
  selector: 'formly-field-tabs',
  template: `
    <p-tabView>
      <p-tabPanel [header]="tab.templateOptions.label" *ngFor="let tab of field.fieldGroup; let i = index" [selected]="i == 0">
        <formly-field [field]="tab"></formly-field>
        <button *ngIf="i == field.fieldGroup.length" class="btn btn-primary" [disabled]="!form.valid" type="submit">
          Submit
        </button>
      </p-tabPanel>
    </p-tabView>
  `,
})
// tslint:disable-next-line:component-class-suffix
export class FormlyFieldTabs extends FieldType {
  constructor() {
    super();
    console.log(this.field);
  }

  isValid(field: FormlyFieldConfig): boolean {
    if (field.key) {
      return field.formControl.valid;
    }

    return field.fieldGroup.every(f => this.isValid(f));
  }
}
