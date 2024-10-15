import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Reporte } from '../models/reporte';
import { jwtDecode } from 'jwt-decode';


@Injectable({
  providedIn: 'root'
})
export class ReporteService {
  url = 'http://localhost:6500/reportes/';

  constructor(private http: HttpClient) { }

  /*
  getReportes(): Observable<any> {
    return this.http.get(this.url);
  }
  */

  getReportes(): Observable<any> {
    const token = localStorage.getItem('token'); // Obtener el token del localStorage

    if (!token) {
      throw new Error('No token found');
    }

    // Decodificar el token para obtener el id_persona
    const decodedToken: any = jwtDecode(token);
    const idPersona = decodedToken.id; // El id_persona está en el campo 'id' del token

    // Construir la URL con el id_persona
    const url = `${this.url}${idPersona}`;

    // Configurar los encabezados con el token
    const headers = new HttpHeaders({
      'x-access-token': token // Incluir el token en los encabezados
    });

    // Realizar la solicitud HTTP GET con la URL construida
    return this.http.get(url, { headers });
  }


  guardarReporte(reporte: Reporte): Observable<any> {
    return this.http.post(this.url, reporte)
  }
}
