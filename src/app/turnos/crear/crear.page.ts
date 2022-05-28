import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RegistroTurnoService } from '../../services/services-turnos/registroturnos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.page.html',
  styleUrls: ['./crear.page.scss'],
})
export class CrearPage implements OnInit {
  registroForm: FormGroup;

  constructor(
    private formsBuilder: FormBuilder,
    private registroService: RegistroTurnoService,
    public router: Router
  ) {
    this.registroForm = this.formsBuilder.group({
      turnos_fecha: [''],
      turnos_hora: [''],
      turnos_laboratorio: ['']
    });
  }

  ngOnInit() {
    console.log(this.registroForm);
  }

  crearTurno() {
    console.log(this.registroForm);

    this.registroService
      .crearTurno(this.registroForm.value)
      .subscribe((res) => {
        console.log(res);
      });
      this.router.navigate(['/turnos']);
  }

}
