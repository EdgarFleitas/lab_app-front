import { Component, OnInit } from '@angular/core';
import { RegistroTurnoService } from 'src/app/services/services-turnos/registroturnos.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-actualizar',
  templateUrl: './actualizar.page.html',
  styleUrls: ['./actualizar.page.scss'],
})
export class ActualizarPage implements OnInit {


  turnos: any;
  id: any;
  actualizarTurnoForm: FormGroup;

  turnos_fecha: any;
  turnos_hora: any;
  turnos_lab: any;

  constructor(
    public registroService: RegistroTurnoService,
    public formBuilder: FormBuilder,
    public router: Router,
    public activatedRoute: ActivatedRoute
    ) {
      this.id = this.activatedRoute.snapshot.paramMap.get('id');
    }

     ngOnInit() {
       console.log('Este es el iddddd',this.id);
       this.actualizarTurnoForm = this.formBuilder.group({
        turnos_fecha: [''],
        turnos_hora: [''],
        turnos_lab: ['']
       });
      this.getDato(this.id);
     }


  getDato(turnos_id){
    this.registroService.obtenerTurno(this.id)
    .subscribe(res => {
      console.log('DATAAAA',res);
    }
    );
  }

  onSubmit(){
    console.log(this.actualizarTurnoForm.value);
  }
  actualizarForm() {
    console.log('codigo id metodo update', this.id);
      this.registroService.actualizarTurno(this.id, this.actualizarTurnoForm.value)
        .subscribe((res) => {
          console.log(res);
          this.actualizarTurnoForm.reset();
          //this.router.navigate(['/usuarios']);
        });

  }

}