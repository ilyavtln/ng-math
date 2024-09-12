import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RshbMasterpageComponent } from "../masterpages/rshb-masterpage/rshb-masterpage.component";
import { RshbMasterpageModule } from "../masterpages/rshb-masterpage/rshb-masterpage.module";

const RSHB_ROUTES: Routes = [
  {
    path: '',
    component: RshbMasterpageComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        loadChildren: () => import('@pages/home-page.module').then(m => m.HomePageModule)
      },
      {
        path: 'agricultural-machinery',
        loadChildren: () => import('@pages/agricultural-machinery/agricultural-machinery.module').then(m => m.AgriculturalMachineryModule)
      },
      {
        path: 'spares',
        loadChildren: () => import('@pages/spares/spares.module').then(m => m.SparesModule)
      },
      {
        path: 'configurator',
        loadChildren: () => import('@pages/configurator/configurator.module').then(m => m.ConfiguratorModule)
      },
      {
        path: 'search',
        loadChildren: () => import('@pages/search/search.module').then(m => m.SearchModule)
      },
      {
        path: 'providers',
        loadChildren: () => import('@pages/provider/provider.module').then(m => m.ProviderModule)
      }
    ]
  },
  {
    path: 'cabinet',
    loadChildren: () => import('@masterpages/cabinet/cabinet.module').then(m => m.CabinetModule)
  },
  {
    path: '**',
    loadChildren: () => import('@masterpages/error/error.module').then(m => m.ErrorModule)
  }
];

@NgModule({
  declarations: [],
  exports: [RouterModule],
  imports: [
    RshbMasterpageModule,
    RouterModule.forChild(RSHB_ROUTES)
  ]
})
export class RshbRoutingModule { }
