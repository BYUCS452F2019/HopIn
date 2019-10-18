import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import {
  SurveyComponent
} from './components';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: 'survey', component: SurveyComponent },
        ]),
    ],
    exports: [RouterModule],
})
export class CoreRoutingModule {}
