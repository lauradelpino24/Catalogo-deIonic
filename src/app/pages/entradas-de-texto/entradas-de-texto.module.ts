import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EntradasDeTextoPage } from './entradas-de-texto.page';

const routes: Routes = [
  {
    path: '',
    component: EntradasDeTextoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EntradasDeTextoPage]
})
export class EntradasDeTextoPageModule {}
