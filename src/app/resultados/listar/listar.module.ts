import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListarResultadoPageRoutingModule } from './listar-routing.module';

import { ListarResultadoPage } from './listar.page';
import { HttpClientModule } from '@angular/common/http'; 

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListarResultadoPageRoutingModule,
    ReactiveFormsModule,
    HttpClientModule 
  ],
  declarations: [ListarResultadoPage]
})
export class ListarResultadoPageModule {}
