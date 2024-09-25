export class Reporte{
  id_reporte?: number;
  id_usuario?: number;
  id_tecnico?: number;
  fecha_recepcion: Date;
  fecha_servicio: Date;
  fecha_salida: Date;
  cliente: string;
  direccion_cliente: string;
  numero_reporte: string;
  tipo_equipo: string;
  marca: string;
  modelo: string;
  serie: string;
  ubicacion: string;
  identificacion_dano: string;
  descripcion_dano: string;
  tipo_mantenimiento: string;
  procedimiento_realizado: string;
  observaciones: string;
  elaborado_por: string;
  responsable_equipo: string;

constructor(id_usuario: number,
  id_tecnico: number,
  fecha_recepcion: Date,
  fecha_servicio: Date,
  fecha_salida: Date,
  cliente: string,
  direccion_cliente: string,
  numero_reporte: string,
  tipo_equipo: string,
  marca: string,
  modelo: string,
  serie: string,
  ubicacion: string,
  identificacion_dano: string,
  descripcion_dano: string,
  tipo_mantenimiento: string,
  procedimiento_realizado: string,
  observaciones: string,
  elaborado_por: string,
  responsable_equipo: string){
    this.id_usuario = id_usuario;
    this.id_tecnico = id_tecnico;
    this.fecha_recepcion = fecha_recepcion;
    this.fecha_servicio = fecha_servicio;
    this.fecha_salida = fecha_salida;
    this.cliente = cliente;
    this.direccion_cliente = direccion_cliente;
    this.numero_reporte = numero_reporte;
    this.tipo_equipo = tipo_equipo;
    this.marca = marca;
    this.modelo = modelo;
    this.serie = serie;
    this.ubicacion = ubicacion;
    this.identificacion_dano = identificacion_dano;
    this.descripcion_dano = descripcion_dano;
    this.tipo_mantenimiento = tipo_mantenimiento;
    this.procedimiento_realizado = procedimiento_realizado;
    this.observaciones = observaciones;
    this.elaborado_por = elaborado_por;
    this.responsable_equipo = responsable_equipo;
  }
}
