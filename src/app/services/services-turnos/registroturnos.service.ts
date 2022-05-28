import { Turno } from "src/app/interfaces/turnos";
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root',
  })
  export class RegistroTurnoService {
    api = 'http://localhost:3000/turno';
    constructor(public http: HttpClient) {}
  
    listarTurno() {
      return this.http.get(this.api + 's');
    }
  
    crearTurno(user: any) {
      return this.http.post(this.api + '/create', user);
    }
  
    buscarTurno(texto: String) {
      return this.http.get(this.api + `s-filter/${texto}`);
    }
  
    obtenerTurno(id: number){
      const path = `${this.api}/find/${id}`;
      return this.http.get(path);
    }
  
  
    actualizarTurno(turnos_id, turno: Turno) {
      return this.http.put(
        'http://localhost:3000/turno/update/' + turnos_id,
        turno
      );
    }
    
  
    eliminarTurnoService(id: Observable<Turno[]>) {
      return this.http.delete<Turno[]>(
        'http://localhost:3000/turno/remove/' + id
      );
    }
  }