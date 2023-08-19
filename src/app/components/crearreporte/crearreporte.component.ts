/* This is a TypeScript class that handles the creation and submission of a rescue report form. */
import { Component } from '@angular/core';
import { RescateService} from './../../services/rescatepost.service';
import { Rescatepost } from 'src/app/models/rescatepost';
import { getUniqueID } from 'src/app/services/custom.functions';


@Component({
  selector: 'app-crearreporte',
  templateUrl: './crearreporte.component.html',
  styleUrls: ['./crearreporte.component.css']
})
export class CrearreporteComponent {
  formulario = {
    idrescate: '',
    nombreDeRescatista: '',
    apellidoDeRescatista: '',
    correoDeRescatista: '',
    celularDeRescatista: '',
    descripcionRescate: '',

  };

  
  constructor(private rescatesService: RescateService) { 
    
  }

  registroExitoso = false;
  registroFallido = false;

  enviarReporte(event: Event) {
    event.preventDefault();
    const idrescate = getUniqueID();
    const nombre = (document.getElementById('c_fname') as HTMLInputElement).value;
    const apellido = (document.getElementById('c_lname') as HTMLInputElement).value;
    const correo = (document.getElementById('c_email') as HTMLInputElement).value;
    const celular = (document.getElementById('c_subject') as HTMLInputElement).value;
    const descripcion = (document.getElementById('c_message') as HTMLTextAreaElement).value;

    const nuevoRescate: Rescatepost = {
      idrescate: idrescate,
      nombreDeRescatista: nombre,
      apellidoDeRescatista: apellido,
      correoDeRescatista: correo,
      celularDeRescatista: celular,
      descripcionRescate: descripcion
    };

    this.rescatesService.agregarRescate(nuevoRescate)
      .subscribe(response => {
        this.registroExitoso = true;
        this.registroFallido = false;
        console.log('Rescate registrado:', response);
        console.log('data ->', nuevoRescate);

         // Reiniciar el formulario después de 5 segundos
         setTimeout(() => {
          this.formulario = {
            idrescate: '',
            nombreDeRescatista: '',
            apellidoDeRescatista: '',
            correoDeRescatista: '',
            celularDeRescatista: '',
            descripcionRescate: ''
          };
          this.registroExitoso = false; // Restablecer el estado de éxito
          window.location.reload();
        }, 5000);


      },error => {
        this.registroExitoso = false;
        this.registroFallido = true;
        console.error('Error al registrar el rescate:', error);
        setTimeout(() => {
          window.location.reload();
        },3000);
      });
  }

}


