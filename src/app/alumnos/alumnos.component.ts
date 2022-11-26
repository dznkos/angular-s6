import { Component, OnInit } from '@angular/core';
import { Alumno } from './alumno';
import { Alumnos } from './alumno.json';


@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit {

  //crea la variable
  alumnos?: Alumno[];

  id = 0;
  nombre = '';
  correo = '';
  promedio = 0;

  mostrar = true;
  txtToggle = 'Ocultar'

  constructor() { }

  ngOnInit():void {
    this.alumnos = Alumnos


  }

  toggle():void {
    this.mostrar = !this.mostrar
    this.txtToggle = !this.mostrar ? 'Ocultar' : 'Mostrar'
  }

  add() {
    var newAlumno = new Alumno(
      this.id,
      this.nombre,
      this.correo,
      this.promedio
    )
    this.alumnos!.push(newAlumno)
  }

  remove(index: number){

    this.alumnos = this.alumnos?.filter( alumno => alumno.id !== index)
  }

  modify(i: number) {

    var modalumno = this.alumnos?.find( alumno => alumno.id === i )


  }

}
