import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';  // Usamos el archivo de configuración del entorno

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  // URL base dependiendo del entorno
  baseUrl = environment.apiUrl;

  constructor() {}

  // Métodos para obtener rutas específicas
  getPersonas() {
    return `${this.baseUrl}/personas`;
  }

  getReportes() {
    return `${this.baseUrl}/reportes`;
  }

  guardarReporte() {
    return `${this.baseUrl}/reportes`;
  }

  // Otros métodos para obtener las URL de tus recursos
}
