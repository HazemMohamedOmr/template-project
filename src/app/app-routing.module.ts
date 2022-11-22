import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: 'Home', 
    loadChildren: () => import('./views/home/home.module').then(m => m.HomeModule)
  },
  { 
    path: 'About-US', 
    loadChildren: () => import('./views/about-us/about-us.module').then(m => m.AboutUsModule)
  },
  { 
    path: '**', redirectTo: 'Home', pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
