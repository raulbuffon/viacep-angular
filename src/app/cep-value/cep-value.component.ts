import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CepInformations } from '../models/CepInformations';
import { ViacepService } from '../viacep.service';

@Component({
  selector: 'app-cep-value',
  templateUrl: './cep-value.component.html',
  styleUrls: ['./cep-value.component.css']
})
export class CepValueComponent implements OnInit {
  cepInfo : CepInformations = new CepInformations();

  constructor(private viacep: ViacepService) {}

  ngOnInit(): void {}

  getCepFromService() {
    this.viacep.getCep('90050280/json/').subscribe(response => {
        this.cepInfo = <CepInformations>response;
      }
    );

    return this.cepInfo;
  }
}
