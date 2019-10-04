import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectRoutingModule } from './project-routing.module';
import { TransactionListComponent } from './components/transaction/transaction-list/transaction-list.component';
import { ChartComponent } from './components/charts/chart/chart.component';
import { NgxChartsModule  } from '@swimlane/ngx-charts'

@NgModule({
  declarations: [TransactionListComponent, ChartComponent],
  imports: [
    CommonModule,
    ProjectRoutingModule,
    NgxChartsModule 
  ]
})
export class ProjectModule {
  
 }
