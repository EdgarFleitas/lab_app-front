import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListarTurnoPageRoutingModule } from './listar-routing.module';

import { ListarTurnoPage } from './listar.page';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListarTurnoPageRoutingModule,
    HttpClientModule,
    ReactiveFormsModule

  ],
  declarations: [ListarTurnoPage]
})
export class ListarTurnoPageModule {}
