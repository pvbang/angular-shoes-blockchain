import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { SidebarComponent } from './admin-dashboard/sidebar/sidebar.component';
import { HeaderComponent } from './admin-dashboard/header/header.component';
import { DoctorComponent } from './shoes/doctor.component';
import { ViewComponent } from './shoes/view/view.component';
import { AddComponent } from './shoes/add/add.component';
import { FormsModule } from '@angular/forms';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';
import { CardComponent } from './dashboard-home/card/card.component';
import { UtilsModule } from 'src/utils/utils.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AdminDashboardComponent,
    SidebarComponent,
    HeaderComponent,
    DoctorComponent,
    ViewComponent,
    AddComponent,
    DashboardHomeComponent,
    CardComponent,
  ],
  imports: [CommonModule, AdminRoutingModule, FormsModule, UtilsModule, HttpClientModule],

})
export class AdminModule { }
