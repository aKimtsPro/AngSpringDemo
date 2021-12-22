import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifecycleDemoComponent } from './lifecycle-demo.component';

describe('LyfecycleDemoComponent', () => {
  let component: LifecycleDemoComponent;
  let fixture: ComponentFixture<LifecycleDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LifecycleDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LifecycleDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
