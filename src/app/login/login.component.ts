import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  role: string = 'user'; // Valor inicial: usuario por defecto
  errorMessage: string = ''; // Para almacenar el mensaje de error
  correo: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onRoleChange(): void {
    const container = document.querySelector('.login-container') as HTMLElement;
    if (this.role === 'tech') {
      container.classList.remove('user-background');
      container.classList.add('tech-background');
    } else {
      container.classList.remove('tech-background');
      container.classList.add('user-background');
    }
  }

  onSubmit(): void {
    // Verificar si los campos están vacíos
    if (!this.username || !this.password) {
      this.errorMessage = 'Por favor, rellena todos los campos.';
      return;
    }
    this.login();
  }

  //Validar datos de logueo para ingresar
  login(): void {
    const credentials = { correo: this.correo, password: this.password };

    this.authService.login(credentials).subscribe(
      response => {
        // Almacenar el token JWT en el localStorage
          this.authService.setToken(response.token);
          this.router.navigate(['/sistema']); // Redirigir a una ruta protegida
        },
        error => {
          this.errorMessage = 'Credenciales inválidas';
        }
      );
    }

    logout(): void {
      this.authService.logout();
      this.router.navigate(['/login']);
    }

    /*
    // Simulación de datos correctos para probar
    const validUser = { username: 'usuario123', password: '123', role: 'user' };
    const validTech = { username: 'tecnico123', password: '123', role: 'tech' };

    // Validación de credenciales
    if (
      (this.username === validUser.username && this.password === validUser.password && this.role === validUser.role) ||
      (this.username === validTech.username && this.password === validTech.password && this.role === validTech.role)
    ) {
      // Redirigir según el rol
      if (this.role === 'user') {
        this.router.navigate(['/consultas']);
      } else if (this.role === 'tech') {
        this.router.navigate(['/sistema']);
      }
    } else {
      if (
        (this.username === validUser.username && this.password === validUser.password && this.role !== validUser.role) ||
        (this.username === validTech.username && this.password === validTech.password && this.role !== validTech.role)
      ) {
        this.errorMessage = 'El rol seleccionado no coincide con el usuario y contraseña ingresados.';
      } else {
        this.errorMessage = 'Usuario o contraseña incorrectos.';
      }
    }*/
}
