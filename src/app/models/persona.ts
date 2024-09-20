export class Persona {
  id_persona?: number;
  nombre: string;
  apellido: string;
  correo: string;
  cedula: string;
  rol: string;
  password: string;
  fecha_creacion: Date;
  usuario_creador: number;

  constructor(nombre: string, apellido: string, correo: string, cedula: string, rol: string, password: string, fecha_creacion: Date, usuario_creador: number){
    this.nombre = nombre;
    this.apellido = apellido;
    this.correo = correo;
    this.cedula = cedula;
    this.rol = rol;
    this.password = password;
    this.fecha_creacion = fecha_creacion;
    this.usuario_creador = usuario_creador;
  }

}
