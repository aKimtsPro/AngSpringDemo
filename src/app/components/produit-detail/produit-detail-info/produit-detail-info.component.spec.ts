import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitDetailInfoComponent } from './produit-detail-info.component';

describe('ProduitDetailInfoComponent', () => {
  let component: ProduitDetailInfoComponent;
  let fixture: ComponentFixture<ProduitDetailInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProduitDetailInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProduitDetailInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
