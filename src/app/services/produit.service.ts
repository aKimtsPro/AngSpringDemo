import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProduitForm } from '../models/produit-form.model';
import { Produit } from '../models/produit.model';
import { SessionService } from './session.service';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  constructor(private _client: HttpClient, private _sessionService: SessionService) { }

  public getAll(): Observable<Produit[]> {
    return this._client.get<Produit[]>( "http://localhost:8080/produit", {
      headers: this._sessionService.getAuthHeader()
    });
  }

  public getOne(id: number): Observable<Produit> {
    // return this._client.get<Produit>( "http://localhost:8080/produit/" + id );
    return this._client.get<Produit>( "http://localhost:8080/produit/"+id, {
      headers: this._sessionService.getAuthHeader()
    } )
  }

  public insert( form: ProduitForm ): Observable<Produit> {
    return this._client.post<Produit>("http://localhost:8080/produit", form, {
      headers: this._sessionService.getAuthHeader()
    })
  }

  public delete( id: number ): Observable<Produit> {
    return this._client.delete<Produit>( "http://localhost:8080/produit/delete/"+id, {
      headers: this._sessionService.getAuthHeader()
    } )
  }

}
