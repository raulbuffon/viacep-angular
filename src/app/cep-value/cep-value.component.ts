import { Component, OnInit } from '@angular/core';
import { CepInformations } from '../models/CepInformations';
import { ViacepService } from '../viacep.service';

@Component({
  selector: 'app-cep-value',
  templateUrl: './cep-value.component.html',
  styleUrls: ['./cep-value.component.css']
})
export class CepValueComponent implements OnInit {
  public cepInfo : CepInformations = new CepInformations();
  public cepNumber! : number;

  constructor(private viacep: ViacepService) {}

  ngOnInit(): void {}

  getCepFromService() {
    this.viacep.getCep(this.cepNumber.toString()).subscribe(response => {
        this.cepInfo = <CepInformations>response;
      }
    );

    return this.cepInfo;
  }
}
