import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class ResultadoService {
  api = 'http://localhost:3000/resultado';
  constructor(public http: HttpClient) {}

  listarResultado() {
    return this.http.get(this.api + 's');
  }

  // crearResultado(user: any) {
  //   return this.http.post(this.api + '/create', user);
  // }

  buscarResultado(texto: String) {
    return this.http.get(this.api + `s-filter?q=${texto}`);
  }

  obtenerResultado(id: number){
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