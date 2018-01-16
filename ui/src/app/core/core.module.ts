import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { ApiService } from './services/api.service';

@NgModule({
  imports: [
    CommonModule,
    HttpModule
  ],
  declarations: [],
providers: [ ApiService ]
})
export class CoreModule { }
