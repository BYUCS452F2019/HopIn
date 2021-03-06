import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreRoutingModule } from './core.routes';
import { RouterModule } from '@angular/router';
import { SurveyComponent } from './components';
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
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations/';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

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
  ...modulesToExport,
];
const components = [SurveyComponent];

@NgModule({
  declarations: [components],
  imports: modules,
  exports: [components, ...modulesToExport],
  entryComponents: [],
})
export class CoreModule {}
