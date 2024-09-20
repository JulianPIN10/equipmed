import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  url = 'http://localhost:6500/personas/';

  constructor(private http: HttpClient) { }

  getPersonas(): Observable<any> {
    return this.http.get(this.url);
  }
}
