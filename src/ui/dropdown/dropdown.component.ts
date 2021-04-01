import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'app-dropdown',
  template: `
    <div class="p-fluid">
      <div class="p-field">
        <label>{{to.label}}</label>
        <p-dropdown 
        [options]="dropdownOptions" 
        [optionLabel]="!!to.optionLabel ? to.optionLabel : ''"
        [placeholder]="to.placeholder"
        [showClear]="to.showClear === true"
        [editable]="to.editable === true"
        [filterBy]="!!to.filterBy ? to.filterBy : ''"
        [filter]="to.filter === true"
        [group]="to.group === true"
        [formControl]="formControl" [formlyAttributes]="field" >
      </p-dropdown>
        </div>
    </div>
  `,
  styles: [
  ]
})
export class DropdownComponent extends FieldType implements OnInit {

  dropdownOptions = [];

  constructor(private httpClient: HttpClient) {
    super();
  }

  ngOnInit(): void {
    if (this.to.remoteurl) {
      this.httpClient.get<any[]>(this.to.remoteurl).subscribe(data => {
        this.dropdownOptions = data;
      });
    } else if (this.to.options) {
      this.dropdownOptions = this.to.options as any[];
    } else {
      this.dropdownOptions = [];
    }
  }

}
