import { Area } from 'src/app/area/area.service';
import { Injectable, OnInit } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

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

  public adicionarPalestrante(palestrante: Palestrante): Promise<Palestrante> {
    console.log(palestrante);
    return this.http.post<Palestrante>(`${this.palestranteUrl}/cadastrar`, palestrante)
    .toPromise();
  }

  public listarPalestrantes(): Palestrante[] {
    return this.palestrantes;
  }

}

export class Palestrante {
  codPalestrante: string;
  nome: string;
  cpf: string;
  telefone: string;
  email: string;
  biografia: string;
  area = new Area();
}
