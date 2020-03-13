import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PalestranteService implements OnInit {
  validou: Boolean;
  palestrantes: Array<Palestrante>;
  constructor() {
    validou: true;
    this.palestrantes = [{ id: '1', nome: 'Zorzo', cpf: '111.222.333-44', telefone: '(49) 99999-9999', email: 'zorzo@uniarp.com.br', area: 'sistemaas de Informação' },
    { id: '2', nome: 'Conte', cpf: '111.222.333-44', telefone: '(49) 99999-9999', email: 'zorzo@uniarp.com.br', area: 'sistemaas de Informação' }];
  }

  ngOnInit() {

  }

  public removerPalestrante(idPal: string): Boolean {
    return this.validou;
  }

  public adicionarPalestrante(palestrante: Palestrante): Boolean {
    return this.validou;
  }
  public listarPalestrantes(): Array<Palestrante> {
    return this.palestrantes;
  }
}

export class Palestrante {
  id: string;
  nome: string;
  cpf: string;
  telefone: string;
  email: string;
  area: string;

  constructor() { }

}