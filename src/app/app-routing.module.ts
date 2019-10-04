import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';


const routes: Routes = [
  // {
  //   path: 'project',
  //   loadChildren: './../app/Modules/project/project.module#ProjectModule'
  // },
    {
      path: 'project',
      loadChildren: () => import('./Modules/project/project.module').then(mod => mod.ProjectModule)
    }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
