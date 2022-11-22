import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FSectionComponent } from './f-section/f-section.component';
import { SSectionComponent } from './s-section/s-section.component';
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: FSectionComponent
  },
  {
    path: 'f-sec',
    component: FSectionComponent
  },
  {
    path: 's-sec',
    component: SSectionComponent
  }
];

@NgModule({
  declarations: [
    FSectionComponent,
    SSectionComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class HomeModule { }
