import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'app-cascade-select',
  template: `
    <div class="p-fluid p-grid" style="margin-left:2px">
      <div class="p-field">
        <label>{{to.label}}</label>
        <p-cascadeSelect 
        [options]="selectOptions" 
        [optionLabel]="to.optionLabel || ''" 
        [optionGroupLabel]="to.optionGroupLabel || ''" 
        [optionGroupChildren]="to.optionGroupChildren || []" 
        [placeholder]="to.placeholder"
        [formControl]="formControl" [formlyAttributes]="field">
      </p-cascadeSelect>
      </div>
  </div>
  `,
  encapsulation: ViewEncapsulation.None
})
export class CascadeSelectComponent extends FieldType implements OnInit {

  selectOptions = [];

  constructor(private httpClient: HttpClient) {
    super();
  }

  ngOnInit(): void {
    if (this.to.remoteurl) {
      this.httpClient.get<string[]>(this.to.remoteurl).subscribe(data => {
        this.selectOptions = data;
      });
    } else if (this.to.options) {
      this.selectOptions = this.to.options as string[];
    } else {
      this.selectOptions = [];
    }
  }

}
