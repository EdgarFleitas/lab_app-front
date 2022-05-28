import { Component, OnInit } from '@angular/core';
import {RegistroResultadoService} from 'src/app/services/services-resultados/registroresultados.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.page.html',
  styleUrls: ['./listar.page.scss'],
})
export class ListarResultadoPage implements OnInit {

  constructor(private registroService: RegistroResultadoService) { }

  listaResultados;

  ngOnInit() {
    this.listarResultados();
  }

  listarResultados(){
    this.registroService.listarResultado().subscribe(res =>{
      console.log(res);
      this.listarResultados = res['resultados'];
    });
  }
}
