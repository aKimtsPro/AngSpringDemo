import { Component, Input, OnInit } from '@angular/core';
import { Produit } from 'src/app/models/produit.model';

@Component({
  selector: 'app-produit-detail-info',
  templateUrl: './produit-detail-info.component.html',
  styleUrls: ['./produit-detail-info.component.css']
})
export class ProduitDetailInfoComponent implements OnInit {

  @Input()
  produit: Produit | null = null; 

  constructor() { }

  ngOnInit(): void {
  }

}
