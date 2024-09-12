import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contact = {
    name: '',
    email: '',
    phone: '',
    message: ''
  };

  onSubmit() {
    if (this.contact.name && this.contact.email && this.contact.phone && this.contact.message) {
      console.log('Formulario enviado:', this.contact);
      // Lógica de envío del formulario
    } else {
      alert('Por favor, completa todos los campos.');
    }
  }
}
