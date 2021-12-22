import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListProduitComponent } from './components/list-produit/list-produit.component';
import { ProduitDetailComponent } from './components/produit-detail/produit-detail.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { NavComponent } from './components/nav/nav.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProduitDetailInfoComponent } from './components/produit-detail/produit-detail-info/produit-detail-info.component';
import { LifecycleDemoComponent } from './components/lifecycle-demo/lifecycle-demo.component';
import { ProduitInsertFormComponent } from './components/produit-insert-form/produit-insert-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ListProduitComponent,
    ProduitDetailComponent,
    AccueilComponent,
    NavComponent,
    LoginFormComponent,
    ProduitDetailInfoComponent,
    LifecycleDemoComponent,
    ProduitInsertFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
