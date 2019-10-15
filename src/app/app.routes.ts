import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{ path: '**', redirectTo: 'login', pathMatch: 'full' }];

export const AppRouting = RouterModule.forRoot(routes, {
  useHash: true,
});
