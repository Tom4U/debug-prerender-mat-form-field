import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormRoutingModule } from './form-routing.module';
import { FormComponent } from './form/form.component';
import { ContactComponent } from './contact/contact.component';



@NgModule({
  declarations: [
    FormComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    FormRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class FormModule { }
