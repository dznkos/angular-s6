import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Alumno } from './alumno';
import { Alumnos } from './alumno.json';


@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit {

  public formAlumno!: FormGroup;

  //crea la variable
  alumnos?: Alumno[];


  mostrar = true;
  txtToggle = 'Ocultar'

  clearAlumno = {
    id: '',
    nombre: '',
    email: '',
    promedio: ''
  }

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit():void {
    this.alumnos = Alumnos;
    //Validaciones por formControlName
    this.formAlumno = this.formBuilder.group({
      id: ['', [Validators.required, Validators.maxLength(3)]],
      nombre: ['', [Validators.required, Validators.maxLength(10)]],
      email: ['', [Validators.required, Validators.email]],
      promedio: ['', [Validators.required, Validators.min(0),Validators.max(20), Validators.maxLength(2)]],
    })
  }

  toggle():void {
    this.mostrar = !this.mostrar
    this.txtToggle = !this.mostrar ? 'Ocultar' : 'Mostrar'
  }

  add():any {

    var { id } = this.formAlumno.value;

    if (this.alumnos?.find( a => a.id === id)) {
      var question = window.confirm('Confirmar actualizar los datos');

      if (question) {
        this.alumnos = this.alumnos?.map( (alu) => {
          if ( alu.id === id) {
            return this.formAlumno.value;
          }
          return alu;
        })
        this.formAlumno.patchValue(this.clearAlumno)
      }else{
        this.formAlumno.patchValue(this.clearAlumno)
        return;
      }
    }else{
      this.alumnos?.push(this.formAlumno.value)
      this.formAlumno.patchValue(this.clearAlumno)
      alert('Alumno agregado!')
    }

  }

  remove(index: number):void{
    this.alumnos = this.alumnos?.filter( alumno => alumno.id !== index)
  }

  modify(i: number):void {

    if (window.confirm('Desea modificar datos?')) {
      var modalumno = this.alumnos?.find( alumno => alumno.id === i )
      console.log(modalumno)
      this.formAlumno.patchValue(modalumno!)
    }else{
      return;
    }
  }

}
