import { Injectable, OnInit } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuario } from '../usuario/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class PalestranteService implements OnInit {
  private validou: Boolean;
  private palestrantes: Palestrante[];
  palestranteUrl = "https://uniarpextensao.herokuapp.com/public/palestrantes";

  constructor(private http: HttpClient, ) {
    validou: true;
    //   this.palestrantes = [{ id: '1', nome: 'Zorzo', cpf: '111.222.333-44', telefone: '(49) 99999-9999', email: 'zorzo@uniarp.com.br', area: 'sistemaas de Informação' },
    //   { id: '2', nome: 'Conte', cpf: '111.222.333-44', telefone: '(49) 99999-9999', email: 'zorzo@uniarp.com.br', area: 'sistemaas de Informação' }];
    // 
  }
  ngOnInit() {

  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  public removerPalestrante(idPal: string): Boolean {
    return this.validou;
  }

  public adicionar(palestrante: Palestrante): Promise<Usuario> {
    return this.http.get<Usuario>
      (`${this.palestranteUrl}/cadastrar/${palestrante.nome}/${palestrante.cpf}/${palestrante.telefone}/${palestrante.email}/${palestrante.biografia}/${palestrante.area}`, this.httpOptions)
      .toPromise()
      .then(data =>
        data)
      .catch();
  }
  public listarPalestrantes(): Palestrante[] {
    return this.palestrantes;
  }
}

export class Palestrante {
  id: string;
  nome: string;
  cpf: string;
  telefone: string;
  email: string;
  biografia: string;
  area: string;

  constructor() { }

}