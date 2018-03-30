import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule, MatCardModule} from '@angular/material';

@NgModule({
  exports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
  ]
})

export class SharedModule {}
