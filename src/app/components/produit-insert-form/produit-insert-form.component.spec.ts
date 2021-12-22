import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitInsertFormComponent } from './produit-insert-form.component';

describe('ProduitInsertFormComponent', () => {
  let component: ProduitInsertFormComponent;
  let fixture: ComponentFixture<ProduitInsertFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProduitInsertFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProduitInsertFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
