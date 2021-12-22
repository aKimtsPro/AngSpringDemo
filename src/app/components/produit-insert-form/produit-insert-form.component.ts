import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { Marque } from 'src/app/models/marque.model';
import { ValidErrors } from 'src/app/models/validation-errors.model';
import { MarqueService } from 'src/app/services/marque.service';
import { ProduitService } from 'src/app/services/produit.service';


function relationPrixNomValide(control: AbstractControl): ValidationErrors | null {

  if( control.value.nom.length / 1.5 === control.value.prix )
    return null;

  return {
    "errorGlobal": "Le prix devrait etre égal aux nombre de lettre dans le nom /1.5"
  }

}


@Component({
  selector: 'app-produit-insert-form',
  templateUrl: './produit-insert-form.component.html',
  styleUrls: ['./produit-insert-form.component.css']
})
export class ProduitInsertFormComponent implements OnInit {

  form: FormGroup;
  listMarque$!: Observable<Marque[]>;

  nomErrors: String[] = [];
  prixErrors: String[] = [];
  marqueErrors: String[] = [];
  globalErrors: String[] = [];

  constructor(
    private builder: FormBuilder, 
    private _mService: MarqueService,
    private _pService: ProduitService,
    private _router: Router
  ) {
    this.form = builder.group({
      nom: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(40)]),
      prix: new FormControl(0, [Validators.required, Validators.min(0)]),      
      marque_id: new FormControl(undefined, [Validators.required, Validators.min(1)] )
    },{
      // validators: relationPrixNomValide
    })
  }

  ngOnInit(): void {
    this.listMarque$ = this._mService.getAll();
  }

  onSubmit(){

    if( this.form.valid ){

      const subscript = this._pService.insert(this.form.value).subscribe( {
        next: (produit) => {
          alert("le produit a bien été ajouté {" + produit.id + "}")
          this._router.navigateByUrl("/list-produit")
        },
        error: (error) => {

          const validationErrors: ValidErrors = error.error;
          this.nomErrors = validationErrors.fieldErrors
            .filter( (err) => err.fieldName == "nom" )
            .map( err => err.message )

          this.prixErrors = validationErrors.fieldErrors
            .filter( err => err.fieldName == "prix" )
            .map( err => err.message )

          this.marqueErrors = validationErrors.fieldErrors
            .filter( err => err.fieldName == "marque_id" )
            .map( err => err.message )

          this.globalErrors = validationErrors.globalErrors;

        },
        complete: () => {
          console.log(subscript);
          subscript.unsubscribe();
          console.log(subscript);
        }

      } )
    }

  }

}
