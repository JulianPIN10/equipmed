import { Component } from '@angular/core';

@Component({
  selector: 'app-why-we',
  templateUrl: './why-we.component.html',
  styleUrls: ['./why-we.component.css']
})
export class WhyWeComponent {
  items = [
    {
      title: 'Eficiencia Mejorada',
      paragraph: 'Automatiza la administración de mantenimientos, reduciendo tiempo y recursos necesarios.',
      imagePath: 'assets/img/icon-gestion-del-tiempo.png' // Ruta de la primera imagen
    },
    {
      title: 'Seguimiento Preciso',
      paragraph: 'Controla cada intervención con detalle para tener un registro completo del mantenimiento.',
      imagePath: 'assets/img/icon-resultados.png' // Ruta de la segunda imagen
    },
    {
      title: 'Cliente Satisfecho',
      paragraph: 'Ofrece un servicio de alta calidad con respuesta rápida y confiable para el cliente.',
      imagePath: 'assets/img/icon-realimentacion.png' // Ruta de la tercera imagen
    },
    {
      title: 'Facilidad de Uso',
      paragraph: 'Interfaz intuitiva que permite una experiencia de usuario sin complicaciones.',
      imagePath: 'assets/img/icon-facil.png' // Ruta de la cuarta imagen
    }
  ];
}

