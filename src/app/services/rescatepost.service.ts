import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Rescatepost } from '../models/rescatepost';

@Injectable({
  providedIn: 'root'
})
export class RescateService {
  private apiUrl = 'https://localhost:7107/api/Rescates';

  constructor(private http: HttpClient) { }

  agregarRescate(rescate: Rescatepost) {
    return this.http.post(this.apiUrl, rescate);
  }
}
