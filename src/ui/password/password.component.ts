import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'app-password',
  template: `
    <div class="p-fluid">
      <div class="p-field">
        <label>{{to.label}}</label>
        <p-password 
        [feedback]="!!to.feedback"
        [toggleMask]="!!to.toggleMask"
        [mediumRegex]="to.mediumRegex || mediumRegex"
        [strongRegex]="to.strongRegex || strongRegex"
        [formControl]="formControl" [formlyAttributes]="field">
        <ng-template *ngIf="!!to.header" pTemplate="header">
              <h6>{{to.header}}</h6>
          </ng-template>
        <ng-template *ngIf="!!to.suggestionsMessages" pTemplate="footer">
              <p-divider></p-divider>
              <p class="p-mt-2" *ngIf="!!to.suggestionHeader">{{to.suggestionHeader}}</p>
              <ul class="p-pl-2 p-ml-2 p-mt-0" style="line-height: 1.5">
                  <li *ngFor="let item of to.suggestionsMessages">{{item}}</li>
              </ul>
          </ng-template></p-password>
        </div>
    </div>
  `,
  encapsulation: ViewEncapsulation.None
})
export class PasswordComponent extends FieldType implements OnInit {

  mediumRegex = '^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})';
  strongRegex = '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})';
  constructor() {
    super();
  }

  ngOnInit(): void {
  }

}
