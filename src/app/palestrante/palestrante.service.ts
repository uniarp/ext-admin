
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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

  cadastrar(palestrante: Palestrante): Promise<Palestrante>{
    palestrante.codPalestrante = null;
    return this.http.post<Palestrante>(`${this.palestranteUrl}/cadastrar`, palestrante)
      .toPromise();
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
    return this.http.get<any>(this.palestranteUrl + `/excluir/`+codPalestrante, this.httpOptions)
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