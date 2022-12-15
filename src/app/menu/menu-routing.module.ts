import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: '',
    component: MenuPage,
    children: [
      {
        path: 'homeapp',
        loadChildren: () =>
        import('../homeapp/homeapp.module').then( m => m.HomeappPageModule)
      },
      {
        path: 'settings',
        loadChildren: () =>
        import('../settings/settings.module').then( m => m.SettingsPageModule)
      },
      {
        path: 'sports',
        loadChildren: () =>
        import('../sports/sports.module').then( m => m.SportsPageModule)
      },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
