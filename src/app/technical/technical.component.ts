import { Component, HostListener } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-technical',
  templateUrl: './technical.component.html',
  styleUrls: ['./technical.component.css']
})
export class TechnicalComponent {
   // Estado del menú y opción seleccionada
   isMenuOpen: boolean = false;
   selectedOption: string = 'option1';
   username: string = 'Usuario';
 
   // Formulario reactivo
   technicalForm: FormGroup;
 
   constructor(private fb: FormBuilder) {
     // Inicialización del formulario con validaciones
     this.technicalForm = this.fb.group({
       fechaRecepcion: ['', Validators.required],
       fechaServicio: ['', Validators.required],
       fechaSalida: ['', Validators.required],
       cliente: ['', Validators.required],
       direccionCliente: ['', Validators.required],
       numeroReporte: ['', Validators.required],
       tipoEquipo: ['', Validators.required],
       marca: ['', Validators.required],
       modelo: ['', Validators.required],
       serie: [''],
       ubicacion: ['', Validators.required],
       danio: ['', Validators.required],
       tipoMantenimiento: ['', Validators.required],
       procedimiento: ['', Validators.required],
       observaciones: [''],
       elaboradoPor: ['', Validators.required],
       responsable: ['', Validators.required]
     });
   }
 
   ngOnInit(): void {}
 
   // Métodos relacionados con el menú
   toggleMenu() {
     this.isMenuOpen = !this.isMenuOpen;
   }
 
   selectOption(option: string) {
     this.selectedOption = option;
     if (window.innerWidth <= 768) {
       this.isMenuOpen = false; // Cierra el menú al seleccionar una opción en móvil
     }
   }
 
   // Lógica de cierre de sesión
   logout() {
     console.log('Cerrando sesión...');
   }
 
   // Envío de formulario
   onSubmit() {
     if (this.technicalForm.valid) {
       console.log('Formulario Enviado', this.technicalForm.value);
       // Aquí podrías agregar lógica para enviar los datos del formulario a un servidor o procesarlos.
     } else {
       console.log('Formulario Inválido');
     }
   }

}
