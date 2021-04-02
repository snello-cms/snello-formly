import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'app-selectbutton',
  template: `
    <div class="p-fluid">
      <div class="p-field">
        <label >{{to.label}}</label>
        <p-selectButton   
        [options]="stateOptions"
        [optionLabel]="to.optionLabel" 
        [optionValue]="to.optionValue"
        [multiple]="!!to.multiple"
        [formControl]="formControl" [formlyAttributes]="field"></p-selectButton >
        </div>
    </div>
  `,
  encapsulation: ViewEncapsulation.None
})
export class SelectbuttonComponent extends FieldType implements OnInit {

  stateOptions = [];

  constructor(private httpClient: HttpClient) {
    super();
  }

  ngOnInit(): void {
    if (this.to.remoteurl) {
      this.httpClient.get<any[]>(this.to.remoteurl).subscribe(data => {
        this.stateOptions = data;
      });
    } else if (this.to.options) {
      this.stateOptions = this.to.options as any[];
    } else {
      this.stateOptions = [];
    }
  }

}
