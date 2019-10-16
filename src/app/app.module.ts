import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRouting } from './app.routes';
import { CoreModule } from './core';
import { MatSidenavModule, MatToolbarModule, MatIconModule, MatButtonModule } from '@angular/material';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { SharedModule } from './shared';

const modules = [
  AppRouting,
  BrowserModule,
  CoreModule,
  MatSidenavModule,
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  HttpClientModule,
  HttpModule,
  SharedModule,
  MatIconModule,
  // NgbModule.forRoot(),
];

@NgModule({
  declarations: [AppComponent],
  imports: modules,
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
