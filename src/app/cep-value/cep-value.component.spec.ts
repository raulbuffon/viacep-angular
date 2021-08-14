import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CepValueComponent } from './cep-value.component';

describe('CepValueComponent', () => {
  let component: CepValueComponent;
  let fixture: ComponentFixture<CepValueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CepValueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CepValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
