//import { Resultado} from "../interfaces/resultados";
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root',
  })
  export class RegistroResultadoService {
    api = 'http://localhost:3000/resultado';
    constructor(public http: HttpClient) {}
  
    listarResultado() {
      return this.http.get(this.api + 's');
    }
  
    // crearTurno(user: any) {
    //   return this.http.post(this.api + '/create', user);
    // }
  
    buscarResultado(texto: String) {
      return this.http.get(this.api + `s-filter/${texto}`);
    }
  
    obtenerResultado(id: number){
      const path = `${this.api}/find/${id}`;
      return this.http.get(path);
    }
  
  
    // actualizarResultado(result_id , resultado: Resultado) {
    //   return this.http.put(
    //     'http://localhost:3000/turno/update/' + result_id ,
    //     resultado
    //   );
    // }
    
  
    // eliminarResultadoService(id: Observable<Resultado[]>) {
    //   return this.http.delete<Resultado[]>(
    //     'http://localhost:3000/turno/remove/' + id
    //   );
    // }
  }