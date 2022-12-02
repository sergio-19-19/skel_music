import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuappPage } from './menuapp.page';

const routes: Routes = [
  {
    path: '',
    component: MenuappPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuappPageRoutingModule {}
