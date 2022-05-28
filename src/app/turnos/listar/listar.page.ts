import { Component, OnInit } from '@angular/core';
import { RegistroTurnoService } from 'src/app/services/services-turnos/registroturnos.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.page.html',
  styleUrls: ['./listar.page.scss'],
})
export class ListarTurnoPage implements OnInit {

  constructor(private registroService: RegistroTurnoService) { }

  listaTurnos;

  ngOnInit() {
    this.listarTurnos();
  }

  listarTurnos(){
    this.registroService.listarTurno().subscribe(res =>{
      console.log(res);
      this.listarTurnos = res['turnos'];
    });
  }
}
