/* tslint:disable:component-selector component-class-suffix */
import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { FieldType, FormlyFieldConfig } from '@ngx-formly/core';
import { MenuItem } from 'primeng/api';
import { Subscription } from 'rxjs';

@Component({
  selector: 'formly-field-steps',
  template: `
    <p-steps [model]="items" [(activeIndex)]="index" [readonly]="true"></p-steps>

    <p-card styleClass="p-card-shadow">
      <ng-template pTemplate="title">
        {{items[index].label}}
      </ng-template>

      <ng-template pTemplate="content">
        <div class="form-container">
          <form>
            <formly-form [model]="model" [fields]="fields" [form]="form"></formly-form>
          </form>
        </div>
      </ng-template>

      <ng-template pTemplate="footer">
        <div class="p-grid p-nogutter" [class.p-justify-between]="index>0" [class.p-justify-end]="index===0">
          <p-button *ngIf="index > 0" label="Back" icon="pi pi-angle-left" (click)="prevPage()"></p-button>
          <p-button *ngIf="index < tabs.length-1" label="Next" icon="pi pi-angle-right" iconPos="right"
                    (click)="nextPage()"></p-button>
          <p-button *ngIf="index === tabs.length-1" label="Complete" (onClick)="complete()"
                    icon="pi pi-angle-right" iconPos="right" styleClass="p-button-success"></p-button>
        </div>
      </ng-template>
    </p-card>
  `,
  encapsulation: ViewEncapsulation.None
})
export class FormlyFieldSteps extends FieldType implements OnInit, OnDestroy {
  subscription: Subscription;

  fields: FormlyFieldConfig[];
  items: MenuItem[] = [];
  tabs: any[] = [];
  index = 0;

  ngOnInit(): void {
    this.subscription = new Subscription();

    if (this.field && this.field.fieldGroup) {
      this.field.fieldGroup.forEach((fg, index) => {
        this.tabs[index] = fg.fieldGroup;
        this.items.push(
          {
            label: fg.templateOptions.label,
            command: (event: any) => {
              this.index = index;
              this.fields = this.tabs[index];
            }
          }
        );
      });
    }

    this.fields = this.tabs[0];
  }

  isValid(field: FormlyFieldConfig): boolean {
    if (field.key) {
      return field.formControl.valid;
    }

    return field.fieldGroup.every(f => this.isValid(f));
  }

  nextPage(): void {
    if (this.form.valid) {
      this.index = this.index + 1;
      this.fields = this.tabs[this.index];
    }
  }

  prevPage(): void {
    if (this.index > 0) {
      this.index = this.index - 1;
      this.fields = this.tabs[this.index];
    }
  }

  complete(): void {
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
