import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component'
import { UserProfileComponent } from './user-profile/user-profile.component'

const routes: Routes = [
  { path: 'profile/:userID', component: UserProfileComponent },
  { path: '', component: UserListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

