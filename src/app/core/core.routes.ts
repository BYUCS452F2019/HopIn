import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  CreateGroupComponent,
  DashboardComponent,
  LoginComponent,
  MyGroupsComponent,
  NearMeComponent,
  SettingsComponent,
  ProfileComponent,
  AddRideComponent,
} from './components';

@NgModule({
  imports: [
    RouterModule.forChild([{ path: 'create-group', component: CreateGroupComponent }]),
    RouterModule.forChild([{ path: 'dashboard', component: DashboardComponent }]),
    RouterModule.forChild([{ path: 'login', component: LoginComponent }]),
    RouterModule.forChild([{ path: 'my-groups', component: MyGroupsComponent }]),
    RouterModule.forChild([{ path: 'near-me', component: NearMeComponent }]),
    RouterModule.forChild([{ path: 'profile', component: ProfileComponent }]),
    RouterModule.forChild([{ path: 'settings', component: SettingsComponent }]),
    RouterModule.forChild([{ path: 'add-ride', component: AddRideComponent }]),
  ],
  exports: [RouterModule],
})
export class CoreRoutingModule {}
