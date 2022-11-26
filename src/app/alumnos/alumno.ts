export class Alumno {

  estado?:string;

 constructor(
  public id: number,
  public nombre: string,
  public correo: string,
  public promedio: number,
 ) { }
}
