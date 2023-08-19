import { Component, OnInit } from '@angular/core';
import { GetrescatesService } from 'src/app/services/rescates.service';


@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit{
  datos: any[] = []; // Variable para almacenar los datos de la API

  constructor(private apiService: GetrescatesService) { }

  ngOnInit() {
    this.apiService.getDatos().subscribe(data => {
      this.datos = data;
      console.log("Datos ->", data);
    });
  }
}