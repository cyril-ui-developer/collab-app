import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { CollabMainRoutingModule } from './collab-main-routing.module';
import { CollabMainComponent } from './collab-main/collab-main.component';


import { SharedModule } from '../shared/shared.module';
import { MainContentComponent } from './main-content/main-content.component';
import { SidebarComponent } from './sidebar/sidebar.component';
//import { HeaderComponent } from './header/header.component';
import { RightOutletComponent } from './right-outlet/right-outlet.component';
import { CollabService } from './services/collab.service';
//import { RegisterComponent } from './register/register.component';
//import { LoginComponent } from './login/login.component';
import { LeftSidebarComponent } from './left-sidebar/left-sidebar.component';
import { LeftOutletComponent } from './left-outlet/left-outlet.component';
import { DefaultMainContentComponent } from './default-main-content/default-main-content.component';

const routes: Routes = [
  { path: '', component: CollabMainComponent },

 // { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [
    CommonModule,
    CollabMainRoutingModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    SharedModule,
   // RouterModule.forChild(routes)

  ],
  declarations: [CollabMainComponent, MainContentComponent, SidebarComponent,
     RightOutletComponent, LeftSidebarComponent, LeftOutletComponent, DefaultMainContentComponent],
  providers: [CollabService],
exports: [LeftOutletComponent]
})
export class CollabMainModule { }
