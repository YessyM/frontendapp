import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class GetanimalsService {

  private apiUrl = 'https://localhost:7107/api'; // URL de tu API

  constructor(private http: HttpClient) { }

  getDatos(): Observable<any> {
    
    return this.http.get(`${this.apiUrl}/Animales`);
    
  }

  postDatos(datos: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/Animales`, datos);
  }
}
