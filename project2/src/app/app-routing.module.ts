import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';

import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {path: '', redirectTo: 'Dashboard', pathMatch: 'full'},
  {path: 'Dashboard', component: DashboardComponent},
  {path: 'Profile', component: ProfileComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
