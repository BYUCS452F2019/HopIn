import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreRoutingModule } from './core.routes';
import { RouterModule } from '@angular/router';
import {
  MatToolbarModule,
  MatTabsModule,
  MatIconModule,
  MatButtonModule,
  MatMenuModule,
  MatGridListModule,
  MatListModule,
  MatSidenavModule,
  MatCardModule,
  MatStepperModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatDialogModule,
  MatExpansionModule,
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations/';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {
  LoginComponent,
  DashboardComponent,
  NearMeComponent,
  ProfileComponent,
  SettingsComponent,
  MyGroupsComponent,
  CreateGroupComponent,
  AddRideComponent,
} from './components';
import { AgmCoreModule } from '@agm/core';

const modulesToExport = [FlexLayoutModule];
const modules = [
  CommonModule,
  CoreRoutingModule,
  RouterModule,
  MatToolbarModule,
  MatTabsModule,
  MatIconModule,
  MatButtonModule,
  MatMenuModule,
  BrowserAnimationsModule,
  MatGridListModule,
  MatListModule,
  MatSidenavModule,
  MatCardModule,
  MatStepperModule,
  ReactiveFormsModule,
  FormsModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatNativeDateModule,
  NgbModule,
  MatDialogModule,
  MatExpansionModule,
  AgmCoreModule.forRoot({ apiKey: 'AIzaSyCXXGwOMcBoLganV0HKVQECsThdx4Ud6H8' }),
  ...modulesToExport,
];
const components = [
  LoginComponent,
  DashboardComponent,
  NearMeComponent,
  ProfileComponent,
  SettingsComponent,
  MyGroupsComponent,
  CreateGroupComponent,
  AddRideComponent,
];

@NgModule({
  declarations: [components],
  imports: modules,
  exports: [components, ...modulesToExport],
  entryComponents: [],
})
export class CoreModule {}
