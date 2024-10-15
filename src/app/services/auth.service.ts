import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url = 'http://localhost:6500/auth/login';

  constructor(private http: HttpClient) {}
    // Método para loguear al usuario y guardar el token
    login(credentials: { correo: string, password: string }): Observable<any> {
      return this.http.post(this.url, credentials);
    }

    // Método para obtener el token del localStorage
    getToken(): string | null {
      return localStorage.getItem('token');
    }

    // Método para verificar si el usuario está logueado
    isLoggedIn(): boolean {
      return this.getToken() !== null;
    }

    // Método para guardar el token en localStorage
    setToken(token: string): void {
      localStorage.setItem('token', token);
    }

    // Método para eliminar el token y cerrar sesión
    logout(): void {
      localStorage.removeItem('token');
    }

    // Método para obtener los headers con el token
    getAuthHeaders() {
      const token = this.getToken();
      return new HttpHeaders({
        Authorization: token ? `Bearer ${token}` : ''
      });
    }
}
