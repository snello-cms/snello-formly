import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { UsersService } from '../../services/users.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styles: []
})
export class EditComponent implements OnInit {

  form: FormGroup;
  options: FormlyFormOptions;
  model: any = {};
  fields: FormlyFieldConfig[];

  constructor(
    protected route: ActivatedRoute,
    private userService: UsersService
  ) {
    this.form = new FormGroup({}, Validators.requiredTrue);
    const id: string = this.route.snapshot.params.id;

    if (id) {
      this.userService.get(id + '.json').subscribe(fields => {
        this.fields = fields;

        console.log('formly fields: ', this.fields);
      });
      this.model = {};
    } else {
      this.userService.getUserData().subscribe(([model, fields]) => {
        this.model = model;
        this.fields = this.mapFields(fields);

        console.log('formly fields: ', this.fields);
      });
    }
  }

  submit(): void {
    if (this.form.valid) {
      alert(JSON.stringify(this.model));
    }
  }

  /**
   * Adjust the JSON fields loaded from the server.
   */
  mapFields(fields: FormlyFieldConfig[]): any {
    return fields.map(f => {
      // Bind an observable to `color` field.
      if (f.key === 'color') {
        f.type = 'radio';
        f.templateOptions.options = this.userService.getColors();
      }

      return f;
    });
  }

  ngOnInit(): void {
  }
}
