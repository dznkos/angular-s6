export class Alumno {

  estado?:string;

 constructor(
  public id: number,
  public nombre: string,
  public email: string,
  public promedio: number,
 ) { }
}
