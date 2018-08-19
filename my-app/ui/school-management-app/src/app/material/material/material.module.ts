import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMenuModule, MatButtonModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatMenuModule,
    MatButtonModule
  ],
  exports: [
    CommonModule,
    MatMenuModule,
    MatButtonModule
  ],
  declarations: []
})
export class MaterialModule { }
