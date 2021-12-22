import { AsyncPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Produit } from 'src/app/models/produit.model';
import { ProduitService } from 'src/app/services/produit.service';

@Component({
  selector: 'app-produit-detail',
  templateUrl: './produit-detail.component.html',
  styleUrls: ['./produit-detail.component.css']
})
export class ProduitDetailComponent implements OnInit {

  produit$!: Observable<Produit>;

  constructor(
    private _service: ProduitService, 
    private _actiRoute: ActivatedRoute,
    private _router: Router  
  ) { }

  ngOnInit(): void {
    const id = this._actiRoute.snapshot.params["id"];
    this.produit$ = this._service.getOne( id );
  }

}
