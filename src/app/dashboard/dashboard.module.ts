import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashboardPageRoutingModule } from './dashboard-routing.module';
import { DashboardPage } from './layouts/dashboard.page';

@NgModule({
  declarations: [DashboardPage],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    DashboardPageRoutingModule,
  ],
})
export class DashboardPageModule {}
