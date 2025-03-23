import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTableModule } from '@angular/material/table';

interface MantencionData {
  centro: string;
  linea: string;
  cantidadBoyasExtraidas: number;
  cantidadBoyasBuenas: number; // Nuevo campo: Boyas buenas
  cantidadBoyasMalas: number; // Nuevo campo: Boyas malas
  cantidadBoyasInstaladas: number;
  ladoA: boolean;
  ladoB: boolean;
  numeroBoyasLimpias: number;
  porcentajeLimpiezaChicotes: number;
  numeroColchas: number;
  observaciones: string;
}

@Component({
  selector: 'app-mantencion-form',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatTableModule,
  ],
  templateUrl: './mantencion-form.component.html',
  styleUrls: ['./mantencion-form.component.css'],
})
export class MantencionFormComponent {
  area: string = 'Anex 1'; // Área fija (no visible para el usuario)
  centro: string = '';
  linea: string = '';
  proceso: string = '';
  fechaHora: string = new Date().toLocaleString(); // Fecha y hora automática
  cantidadBoyasExtraidas: number = 0;
  cantidadBoyasBuenas: number = 0; // Nuevo campo: Boyas buenas
  cantidadBoyasMalas: number = 0; // Nuevo campo: Boyas malas
  cantidadBoyasInstaladas: number = 0;
  observaciones: string = '';
  ladoA: boolean = false;
  ladoB: boolean = false;
  numeroBoyasLimpias: number = 0;
  porcentajeLimpiezaChicotes: number = 0;
  numeroColchas: number = 0;

  // Datos para la tabla
  datosTabla: MantencionData[] = [];
  columnasTabla: string[] = [
    'centro',
    'linea',
    'cantidadBoyasExtraidas',
    'cantidadBoyasBuenas', // Nueva columna: Boyas buenas
    'cantidadBoyasMalas', // Nueva columna: Boyas malas
    'cantidadBoyasInstaladas',
    'ladoA',
    'ladoB',
    'numeroBoyasLimpias',
    'porcentajeLimpiezaChicotes',
    'numeroColchas',
    'observaciones',
    'acciones', // Nueva columna: Acciones (eliminar)
  ];

  procesosDisponibles: string[] = [
    'Extraccion Boyas',
    'Reflote',
    'Tensado',
    'Reposicion F',
    'Re-Instalacion F',
    'Limpieza Boyas',
    'Limpieza Chicotes',
    'Colcha Linea',
  ];

  agregarDatos() {
    // Validación para no agregar datos vacíos
    if (!this.centro || !this.linea) {
      alert('Debe completar todos los campos obligatorios');
      return;
    }

    // Crear el objeto MantencionData con los valores actuales
    const datos: MantencionData = {
      centro: this.centro,
      linea: this.linea,
      cantidadBoyasExtraidas: this.cantidadBoyasExtraidas,
      cantidadBoyasBuenas: this.cantidadBoyasBuenas, // Nuevo campo: Boyas buenas
      cantidadBoyasMalas: this.cantidadBoyasMalas, // Nuevo campo: Boyas malas
      cantidadBoyasInstaladas: this.cantidadBoyasInstaladas,
      ladoA: this.ladoA,
      ladoB: this.ladoB,
      numeroBoyasLimpias: this.numeroBoyasLimpias,
      porcentajeLimpiezaChicotes: this.porcentajeLimpiezaChicotes,
      numeroColchas: this.numeroColchas,
      observaciones: this.observaciones,
    };

    // Agregar el nuevo objeto a la tabla
    this.datosTabla = [...this.datosTabla, datos]; // Usar spread operator para actualizar la referencia

    // Limpiar los campos después de agregar los datos
    this.limpiarCampos();
  }

  eliminarDatos(index: number) {
    // Eliminar el registro de la tabla
    this.datosTabla.splice(index, 1);
    this.datosTabla = [...this.datosTabla]; // Forzar la actualización de la tabla
  }

  limpiarCampos() {
    // Limpiar todos los campos del formulario
    this.linea = '';
    this.centro = '';
    this.cantidadBoyasExtraidas = 0;
    this.cantidadBoyasBuenas = 0; // Limpiar campo: Boyas buenas
    this.cantidadBoyasMalas = 0; // Limpiar campo: Boyas malas
    this.cantidadBoyasInstaladas = 0;
    this.ladoA = false;
    this.ladoB = false;
    this.numeroBoyasLimpias = 0;
    this.porcentajeLimpiezaChicotes = 0;
    this.numeroColchas = 0;
    this.observaciones = '';
    this.proceso = '';
  }

  guardar() {
    if (this.datosTabla.length > 0) {
      console.log('Datos guardados:', this.datosTabla);
      alert('Formulario guardado correctamente');
    } else {
      alert('No hay datos para guardar');
    }
  }
}

