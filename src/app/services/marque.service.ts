import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Marque } from '../models/marque.model';

@Injectable({
  providedIn: 'root'
})
export class MarqueService {

  constructor(private _client: HttpClient) { }

  public getAll(): Observable<Marque[]>{
    return this._client.get<Marque[]>("http://localhost:8080/marque");
  }

}
