import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashboardPageRoutingModule } from './dashboard-routing.module';
import { DashboardPage } from './layouts/dashboard.page';
import { DetailMovieComponent } from './components/detail-movie/detail-movie.component';
import { DirectiveModule } from '../shared/directives/directive.module';

@NgModule({
  declarations: [DashboardPage, DetailMovieComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    DashboardPageRoutingModule,
    DirectiveModule,
  ],
})
export class DashboardPageModule {}
