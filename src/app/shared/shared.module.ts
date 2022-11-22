import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { ContactComponent } from './contact/contact.component';



@NgModule({
  declarations: [
    ButtonComponent,
    ContactComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ButtonComponent,
    ContactComponent
  ]
})
export class SharedModule { }
