import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Turno } from 'src/app/interfaces/turnos';  

@Injectable({
  providedIn: 'root',
})
export class TurnoService {
  api = 'http://localhost:3000/turno';
  constructor(public http: HttpClient) {}

  listarTurno() {
    return this.http.get(this.api + 's');
  }

  crearTurno(user: any) {
    return this.http.post(this.api + '/create', user);
  }

  buscarTurno(texto: String) {
    return this.http.get(this.api + `s-filter?q=${texto}`);
  }

  obtenerTurno(id: number){
    const path = `${this.api}/find/${id}`;
    return this.http.get(path);
  }


  // actualizarUsuario(usu_codigo, usuario: Usuario) {
  //   return this.http.put(
  //     'http://localhost:3000/usuario/update/' + usu_codigo,
  //     usuario
  //   );
  // }

  // eliminarUsuarioService(id: Observable<Usuario[]>) {
  //   return this.http.delete<Usuario[]>(
  //     'http://localhost:3000/usuario/remove/' + id
  //   );
  // }
}