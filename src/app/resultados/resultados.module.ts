import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResultadosPageRoutingModule } from './resultados-routing.module';

import { ResultadosPage } from './resultados.page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResultadosPageRoutingModule,
    ReactiveFormsModule,
    HttpClientModule 
    
  
  ],
  declarations: [ResultadosPage]
})
export class ResultadosPageModule {}
