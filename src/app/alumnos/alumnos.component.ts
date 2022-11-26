import { Component, OnInit } from '@angular/core';
import { Alumno } from './alumno';
import { Alumnos } from './alumno.json';


@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit {

  alumnos?: Alumno[];

  id: number = 0;
  nombre = '';
  correo = '';
  promedio : number = 0;
  estado = '';


  mostrar = true;
  txtToggle = 'Ocultar'

  constructor() { }

  ngOnInit(): void {
    this.alumnos = Alumnos
  }

  toggle():void {
    this.mostrar = !this.mostrar
    this.txtToggle = !this.mostrar ? 'Ocultar' : 'Mostrar'
  }

  add():void {

    const newAlumno = new Alumno(
      this.id,
      this.nombre,
      this.correo,
      this.promedio
    )

    console.log(newAlumno)

    this.alumnos?.push(newAlumno)


  }

}
