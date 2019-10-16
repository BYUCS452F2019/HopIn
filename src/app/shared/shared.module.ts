import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TotalAppService } from './services';

const services = [TotalAppService];
@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [services],
})
export class SharedModule {}
