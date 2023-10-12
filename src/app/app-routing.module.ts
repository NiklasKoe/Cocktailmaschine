import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManagementComponent } from './pages/management/management.component';
import { CocktailsComponent } from './pages/cocktails/cocktails.component';

const routes: Routes = [
  { path: 'cocktails', component: CocktailsComponent },
  { path: 'management', component: ManagementComponent },
  { path: '**', component: CocktailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
