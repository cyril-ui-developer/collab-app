import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { CollabMainRoutingModule } from './collab-main-routing.module';
import { CollabMainComponent } from './collab-main/collab-main.component';


import { SharedModule } from '../shared/shared.module';
import { MainContentComponent } from './main-content/main-content.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  imports: [
    CommonModule,
    CollabMainRoutingModule,
    FormsModule,
    FlexLayoutModule,
    SharedModule

  ],
  declarations: [CollabMainComponent, MainContentComponent, SidebarComponent, HeaderComponent]
})
export class CollabMainModule { }
