export class Alumno {
  id?:number;
  nombre?:string;
  correo?:string;
  promedio!:number;
  estado?:string;

 constructor(id:number,nombre:string,
  correo:string, promedio:number,
  estado:string = ''){
    this.id = id;
    this.nombre = nombre;
    this.correo = correo;
    this.promedio = promedio;
 }
}
