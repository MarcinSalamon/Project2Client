import { FriendsListComponent } from './friends-list/friends-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {path: '', redirectTo: 'friendsList', pathMatch: 'full'},
  {path: 'friendsList', component: FriendsListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
