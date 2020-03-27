import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Area } from 'src/app/area/area.service';

@Injectable({
  providedIn: 'root'
})

export class PalestranteService {
  palestranteUrl = "https://uniarpextensao.herokuapp.com/public/palestrantes";

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  public adicionarPalestrante(palestrante: Palestrante): Promise<Palestrante> {
    console.log(palestrante);
    return this.http.post<Palestrante>(`${this.palestranteUrl}/cadastrar`, palestrante)
      .toPromise();
  }


  public async carregarPalestrante(codigo: number): Promise<Palestrante> {
    const data = await this.http.get<Palestrante>(`${this.palestranteUrl}/listar/${codigo}`)
      .toPromise();
    return data[0];
  }

  listar(): Promise<any>{
    console.log('listou');
    return this.http.get<any>(this.palestranteUrl + `/listar`, this.httpOptions)
    .toPromise();
  }

  listarPalestrante(codPalestrante: number): Promise<any>{
    console.log(this.palestranteUrl + `/listar/`+codPalestrante);
    return this.http.get<any>(this.palestranteUrl + `/listar/`+codPalestrante, this.httpOptions)
    .toPromise();  
  }

  excluir(codPalestrante: number): Promise<any>{
    console.log(this.palestranteUrl + `/excluir/`+codPalestrante);
    return this.http.delete<Palestrante>(`${this.palestranteUrl}/excluir/${codPalestrante}`)
    .toPromise();
  }


}

export class Palestrante {
  codPalestrante: number;
  nome: string;
  cpf: string;
  telefone: string;
  email: string;
  area: string;

  constructor() { }

}