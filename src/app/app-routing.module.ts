import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './components/accueil/accueil.component';
import { ListProduitComponent } from './components/list-produit/list-produit.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { LifecycleDemoComponent } from './components/lifecycle-demo/lifecycle-demo.component';
import { ProduitDetailComponent } from './components/produit-detail/produit-detail.component';
import { LoggedGuard } from './guards/logged.guard';
import { ProduitInsertFormComponent } from './components/produit-insert-form/produit-insert-form.component';

const routes: Routes = [
  { path: '', redirectTo: 'accueil', pathMatch: 'full' },
  { path: 'accueil', component: AccueilComponent },
  { path: 'list-produit', component: ListProduitComponent, canActivate: [LoggedGuard] },
  { path: 'detail/:id', component: ProduitDetailComponent, canActivate: [LoggedGuard] },
  { path: 'produit/add', component: ProduitInsertFormComponent, canActivate: [LoggedGuard] },
  { path: 'cycle', component: LifecycleDemoComponent },
  { path: 'login', component: LoginFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
