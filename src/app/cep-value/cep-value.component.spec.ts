import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs';
import { CepInformations } from '../models/CepInformations';
import { ViacepService } from '../viacep.service';

import { CepValueComponent } from './cep-value.component';

describe('CepValueComponent', () => {
  let component: CepValueComponent;
  let fixture: ComponentFixture<CepValueComponent>;

  let jsonExpectedResponse = 
    {
      "cep": "12345-678",
      "logradouro": "Praça Teste Falso",
      "complemento": "",
      "bairro": "Cidade Baixa",
      "localidade": "Porto Alegre",
      "uf": "RS",
      "ibge": "",
      "gia": "",
      "ddd": "51",
      "siafi": ""
    };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CepValueComponent ],
      imports: [
        HttpClientModule
      ],
      providers: [
        CepValueComponent,
        { provide: ViacepService }
      ]
    }).overrideComponent(
      CepValueComponent,
      {set: {providers: [{provide: ViacepService, useClass: MockViacepService }]}})
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

  it('should validate ', () => {
    component.cepNumber = 0;
    component.getCepFromService();
    expect(component.cepInfo).toEqual(<CepInformations>jsonExpectedResponse);
   });
});

class MockViacepService {
  getCep(url: string) {
    let jsonMocked = 
      {
        "cep": "12345-678",
        "logradouro": "Praça Teste Falso",
        "complemento": "",
        "bairro": "Cidade Baixa",
        "localidade": "Porto Alegre",
        "uf": "RS",
        "ibge": "",
        "gia": "",
        "ddd": "51",
        "siafi": ""
      }
    let mockedCep = new Observable<Object>(observer => {
     observer.next(jsonMocked);
    });
    return mockedCep;
  }
}
