import { Component, OnInit } from '@angular/core';
import { RegistroResultadoService } from '../services/services-resultados/registroresultados.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.page.html',
  styleUrls: ['./resultados.page.scss'],
})
export class ResultadosPage implements OnInit {

  users;
  result_id: number;

  constructor(private registroService: RegistroResultadoService) { }


  ngOnInit() {
    this.listarResultados();
  }


  ionViewWillEnter(){
    this.listarResultados();
  }


   listarResultados(){
    this.registroService.listarResultado()
    .subscribe((data ) => {
      console.log(data);
      this.users = data['resultados'];
      
      for (const result_id in this.users) {
        if (Object.prototype.hasOwnProperty.call(this.users, result_id)) {
          const element = this.users[result_id];
          
          
        }
      }
    });
   }

  buscar(event){
    const valor = event.detail.value;

    if(valor && valor.trim().length>0){
      this.registroService.buscarResultado(valor)
      .subscribe(data => {
        console.log(data);
        if(data){
          this.users = data['resultados'];
        }else{
          this.users = [];
        }
      });
    }

    else{
      this.registroService.listarResultado().subscribe(data=>{
        if(data){
          this.users = data['resultados'];
        }else{
          this.users = [];
        }
      })
    }


 
  }

  // eliminarTurno(turnos, i, slidingItem){
  //   console.log('eliminar, eliminar');
  //   if(window.confirm('Seguro que quieres eliminar?')){
  //     this.registroService.eliminarTurnoService(turnos.turnos_id)
  //     .subscribe(() => {
  //       this.users.splice(i,1);
  //       slidingItem.close();
  //       this.ionViewWillEnter();
  //       console.log('Turno eliminado!');
  //     });
  //   }

  // }

}
