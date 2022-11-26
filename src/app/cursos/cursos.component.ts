import { Component, OnInit } from '@angular/core';

import { Curso } from './curso'
import { Cursos } from './curso.json'

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  cursos?: Curso[];
  
  constructor() { }

  ngOnInit(): void {
    this.cursos = Cursos
  }

}
