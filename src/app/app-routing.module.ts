import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BeatlesComponent } from './beatles/beatles.component';
import { AbbeyRoadComponent } from './abbey-road/abbey-road.component';
import { RevolverComponent } from './revolver/revolver.component';

const ROUTES: Routes = [
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
  {
    path: 'beatles',
    component: BeatlesComponent,
  },
  {
    path: 'abbey-road',
    component: AbbeyRoadComponent,
  },
   {
    path: 'revolver',
    component: RevolverComponent,
  },
];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(ROUTES);