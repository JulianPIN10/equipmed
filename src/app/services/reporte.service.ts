import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Reporte } from '../models/reporte';

@Injectable({
  providedIn: 'root'
})
export class ReporteService {
  url = 'http://localhost:6500/reportes/';

  constructor(private http: HttpClient) { }

  getReportes(): Observable<any> {
    return this.http.get(this.url);
  }

  guardarReporte(reporte: Reporte): Observable<any> {
    return this.http.post(this.url, reporte)
  }
}
