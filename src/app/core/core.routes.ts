import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  CreateGroupComponent,
  HomeComponent,
  LoginComponent,
  MyGroupsComponent,
  NearMeComponent,
  SettingsComponent,
  ProfileComponent,
} from './components';

@NgModule({
  imports: [
    RouterModule.forChild([{ path: 'create-group', component: CreateGroupComponent }]),
    RouterModule.forChild([{ path: 'home', component: HomeComponent }]),
    RouterModule.forChild([{ path: 'login', component: LoginComponent }]),
    RouterModule.forChild([{ path: 'my-groups', component: MyGroupsComponent }]),
    RouterModule.forChild([{ path: 'near-me', component: NearMeComponent }]),
    RouterModule.forChild([{ path: 'profile', component: ProfileComponent }]),
    RouterModule.forChild([{ path: 'settings', component: SettingsComponent }]),
  ],
  exports: [RouterModule],
})
export class CoreRoutingModule {}
