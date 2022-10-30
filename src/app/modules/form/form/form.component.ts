import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  form: FormGroup;
  output?: Object

  constructor(builder: FormBuilder) {
    this.form = builder.group({
      name: new FormControl('Demo name')
    });
  }

  sendForm(): void {
    this.output = this.form.value;
  }
}
