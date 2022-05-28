import { Time } from "@angular/common";

export interface Turno {
    turnos_id?: number;
    turnos_fecha: Date;
    turnos_hora: Time;
    turnos_usu: string;
    turnos_lab: number;
  }

