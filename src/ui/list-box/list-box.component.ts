import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'app-list-box',
  template: `
   <div class="p-fluid p-grid">
      <div class="p-field">
        <label>{{to.label}}</label>
        <p-listbox 
        [options]="listBoxOptions" 
        [optionLabel]="!!to.optionLabel ? to.optionLabel : ''"
        [metaKeySelection]="!!to.metaKeySelection"
        [checkbox]="!!to.checkbox"
        [filter]="!!to.filter"
        [multiple]="!!to.multiple"
        [group]="!!to.group"
        [listStyle]="{'max-height':'250px'}" [style]="{'width':'15rem'}"
        [formControl]="formControl" [formlyAttributes]="field"></p-listbox>
      </div>
  </div>
  `,
  encapsulation: ViewEncapsulation.None
})
export class ListBoxComponent extends FieldType implements OnInit {

  listBoxOptions = [];
  constructor(private httpClient: HttpClient) {
    super();
  }

  ngOnInit(): void {
    if (this.to.remoteurl) {
      this.httpClient.get<any[]>(this.to.remoteurl).subscribe(data => {
        this.listBoxOptions = data;
      });
    } else if (this.to.options) {
      this.listBoxOptions = this.to.options as any[];
    } else {
      this.listBoxOptions = [];
    }
  }

}
