import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{ path: '**', redirectTo: 'survey', pathMatch: 'full' }];

export const AppRouting = RouterModule.forRoot(routes, {
  useHash: true,
});
