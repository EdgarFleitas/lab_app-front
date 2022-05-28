import { Component, OnInit } from '@angular/core';
import { RegistroTurnoService } from '../services/services-turnos/registroturnos.service';

@Component({
  selector: 'app-turnos',
  templateUrl: './turnos.page.html',
  styleUrls: ['./turnos.page.scss'],
})
export class TurnosPage implements OnInit {

  users;
  turnos_id: number;

  constructor(private registroService: RegistroTurnoService) { }


  ngOnInit() {
    this.listarTurnos();
  }


  ionViewWillEnter(){
    this.listarTurnos();
  }


   listarTurnos(){
    this.registroService.listarTurno()
    .subscribe((data ) => {
      console.log(data);
      this.users = data['turnos'];
      //console.log('codigoooos',this.users['usu_codigo'])
      for (const turnos_id in this.users) {
        if (Object.prototype.hasOwnProperty.call(this.users, turnos_id)) {
          const element = this.users[turnos_id];
          //console.log(element.usu_codigo )
          
        }
      }
    });
   }

  buscar(event){
    const valor = event.detail.value;

    if(valor && valor.trim().length>0){
      this.registroService.buscarTurno(valor)
      .subscribe(data => {
        console.log(data);
        if(data){
          this.users = data['turnos'];
        }else{
          this.users = [];
        }
      });
    }

    else{
      this.registroService.listarTurno().subscribe(data=>{
        if(data){
          this.users = data['turnos'];
        }else{
          this.users = [];
        }
      })
    }


 
  }

  eliminarTurno(turnos, i, slidingItem){
    console.log('eliminar, eliminar');
    if(window.confirm('Seguro que quieres eliminar?')){
      this.registroService.eliminarTurnoService(turnos.turnos_id)
      .subscribe(() => {
        this.users.splice(i,1);
        slidingItem.close();
        this.ionViewWillEnter();
        console.log('Turno eliminado!');
      });
    }

  }

}
