import { Component, HostListener, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PersonaService } from '../services/persona.service';
import { ReporteService } from '../services/reporte.service';
import { Persona } from '../models/persona';
import { Reporte } from '../models/reporte';

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

  listPersonas: Persona[] = [];
  listReportes: Reporte[] = [];

  // Formulario reactivo
  technicalForm: FormGroup;

  constructor(private fb: FormBuilder,
    private _personaService: PersonaService,
    private _reporteService: ReporteService) {
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

  ngOnInit(): void {
    //this.obtenerPersonas();
    this.obtenerReportes();
  }

  obtenerPersonas(){
    this._personaService.getPersonas().subscribe(data => {
      console.log(data);
      this.listPersonas = data;
    }, (error: any) => {
      console.log(error);
    })
  }

  obtenerReportes(){
    this._reporteService.getReportes().subscribe(data => {
      console.log(data);
      this.listReportes = data;
    }, (error: any) => {
      console.log(error);
    })
  }

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

  agregarReporte(){
    const user=1;
    const tecnico=1;
    const identi_dano = "dano";
    const descri_dano = "des dano";
    const REPORTE: Reporte = {
      id_usuario: user,
      id_tecnico: tecnico,
      fecha_recepcion: this.technicalForm.get('fechaRecepcion')?.value,
      fecha_servicio: this.technicalForm.get('fechaServicio')?.value,
      fecha_salida: this.technicalForm.get('fechaSalida')?.value,
      cliente: this.technicalForm.get('cliente')?.value,
      direccion_cliente: this.technicalForm.get('direccionCliente')?.value,
      numero_reporte: this.technicalForm.get('numeroReporte')?.value,
      tipo_equipo: this.technicalForm.get('tipoEquipo')?.value,
      marca: this.technicalForm.get('marca')?.value,
      modelo: this.technicalForm.get('modelo')?.value,
      serie: this.technicalForm.get('serie')?.value,
      ubicacion: this.technicalForm.get('ubicacion')?.value,
      identificacion_dano: identi_dano,
      descripcion_dano: descri_dano,
      tipo_mantenimiento: this.technicalForm.get('tipoMantenimiento')?.value,
      procedimiento_realizado: this.technicalForm.get('procedimiento')?.value,
      observaciones: this.technicalForm.get('observaciones')?.value,
      elaborado_por: this.technicalForm.get('elaboradoPor')?.value,
      responsable_equipo: this.technicalForm.get('responsable')?.value
    }

    console.log(REPORTE);
    this._reporteService.guardarReporte(REPORTE).subscribe(data => {
      console.log(data);
    }, error => {
      console.log(error);
      this.technicalForm.reset();
    })
  }
}
