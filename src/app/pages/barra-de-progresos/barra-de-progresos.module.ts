import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BarraDeProgresosPage } from './barra-de-progresos.page';

const routes: Routes = [
  {
    path: '',
    component: BarraDeProgresosPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BarraDeProgresosPage]
})
export class BarraDeProgresosPageModule {}
