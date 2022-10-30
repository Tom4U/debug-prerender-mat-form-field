import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
