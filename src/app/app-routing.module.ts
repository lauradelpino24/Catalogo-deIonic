import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'test-page', loadChildren: './pages/test-page/test-page.module#TestPagePageModule' },
  { path: 'settings', loadChildren: './pages/settings/settings.module#SettingsPageModule' },
  { path: 'botones', loadChildren: './pages/botones/botones.module#BotonesPageModule' },
  { path: 'iconos', loadChildren: './pages/iconos/iconos.module#IconosPageModule' },
  { path: 'entradas-de-texto', loadChildren: './pages/entradas-de-texto/entradas-de-texto.module#EntradasDeTextoPageModule' },
  { path: 'scroll', loadChildren: './pages/scroll/scroll.module#ScrollPageModule' },
  { path: 'item', loadChildren: './pages/item/item.module#ItemPageModule' },
  { path: 'barra-de-progresos', loadChildren: './pages/barra-de-progresos/barra-de-progresos.module#BarraDeProgresosPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
