import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ViacepService } from '../viacep.service';

@Component({
  selector: 'app-cep-value',
  templateUrl: './cep-value.component.html',
  styleUrls: ['./cep-value.component.css']
})
export class CepValueComponent implements OnInit {

  constructor(private viacep: ViacepService, private http: HttpClient) {
       this.http.get('https://viacep.com.br/ws/90050280/json/').subscribe(response => {
      console.log(response);
    });
  }

  ngOnInit(): void {
  }

  getCepFromService() {
    this.viacep.getCep('90050280/json/');
  }
}
