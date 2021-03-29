import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FieldType, FormlyFieldConfig} from '@ngx-formly/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'formly-field-steps',
  template: `
    <p-steps [model]="items" [(activeIndex)]="index">
      <formly-field [field]="tabs[index]"></formly-field>
      <button *ngIf="index == field.fieldGroup.length" class="btn btn-primary" [disabled]="!form.valid" type="submit">
        Submit
      </button>
    </p-steps>
  `,
  encapsulation: ViewEncapsulation.None
})
// tslint:disable-next-line:component-class-suffix
export class FormlyFieldSteps extends FieldType implements OnInit {
  items: MenuItem[] = [];
  tabs: any[] = [];
  index: number;

  ngOnInit(): void {
    if (this.field && this.field.fieldGroup) {
      this.field.fieldGroup.forEach((fg, index) => {
        this.items.push({label: fg.templateOptions.label});
        this.tabs[index] = fg.fieldGroup;
      });
    }
  }

  isValid(field: FormlyFieldConfig): boolean {
    if (field.key) {
      return field.formControl.valid;
    }

    return field.fieldGroup.every(f => this.isValid(f));
  }
}
