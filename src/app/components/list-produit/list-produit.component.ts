import { AsyncPipe } from '@angular/common';
import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Produit } from 'src/app/models/produit.model';
import { ProduitService } from 'src/app/services/produit.service';

@Component({
  selector: 'app-list-produit',
  templateUrl: './list-produit.component.html',
  styleUrls: ['./list-produit.component.css']
})
export class ListProduitComponent implements OnInit {

  confirmDeleteId : number | undefined;
  listProduit$!: Observable<Produit[]>;

  constructor(private _service: ProduitService) { }

  ngOnInit(): void {
    this.listProduit$ = this._service.getAll();
  }

  onDelete(id: number){
    this.confirmDeleteId = id;
  }

  onConfirmDelete(){

    if( this.confirmDeleteId ){
      let sub = this._service.delete( this.confirmDeleteId ).subscribe({
        next: (produit) => {
          alert( produit.nom + " a été supprimé" )
          this.listProduit$ = this._service.getAll();
        },
        error: (err) => {
          alert("L'id du produit à supprimer n'existe pas")
        },
        complete: () => {
          sub.unsubscribe()
        }
      })
    }
    this.confirmDeleteId = undefined;
  }

  onCancelDelete(){
    this.confirmDeleteId = undefined;
  }

}
