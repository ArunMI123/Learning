import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TransactionListComponent } from './components/transaction/transaction-list/transaction-list.component';
import { ChartComponent } from './components/charts/chart/chart.component';


export const ProjectRoutingRoutes: Routes = [
  { path: '', redirectTo: 'project', pathMatch: 'full' },
    {
      path: 'transcationlist', component: TransactionListComponent,
      data: { breadcrumb: 'Transaction list' }
    },
    {
      path: 'chart', component: ChartComponent,
      data: { breadcrumb: 'Chart list' }
    }
];

@NgModule({
  imports: [RouterModule.forChild(ProjectRoutingRoutes)],
  exports: [RouterModule]
})
export class ProjectRoutingModule { }
