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
import { AgmCoreModule } from '@agm/core';

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
  AgmCoreModule.forRoot({ apiKey: 'AIzaSyCXXGwOMcBoLganV0HKVQECsThdx4Ud6H8' }),
  // NgbModule.forRoot(),
];

@NgModule({
  declarations: [AppComponent],
  imports: modules,
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
