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

  public adicionarPalestrante(palestrante: Palestrante): Promise<Palestrante> {
    console.log(palestrante);
    return this.http.post<Palestrante>(`${this.palestranteUrl}/cadastrar`, palestrante)
      .toPromise();
  }

  public carregarPalestrante(codPalestrante: number): Promise<Palestrante> {
    return this.http.get<Palestrante>(`${this.palestranteUrl}/listar/${codPalestrante}`)
      .toPromise()
      .then(data => {
        return data[0];
      });
  }

  listar(): Promise<any> {
    return this.http.get<any>(this.palestranteUrl + `/listar`, this.httpOptions)
    .toPromise()
    .then(res => res);
  }

  listarPalestrante(codPalestrante: number): Promise<any>{
    console.log(this.palestranteUrl + `/listar/`+codPalestrante);
    return this.http.get<any>(this.palestranteUrl + `/listar/`+codPalestrante, this.httpOptions)
    .toPromise();  
  }
  
  excluir(codPalestrante: number): Promise<Palestrante> {
    return this.http.delete<Palestrante>(`${this.palestranteUrl}/excluir/${codPalestrante}`)
      .toPromise();
  }

}

export class Palestrante {
  codPalestrante: string;
  nome: string;
  cpf: string;
  telefone: string;
  email: string;
  biografia: string;
  area: Array<Area>;

  constructor(){
    this.codPalestrante = null;
    this.cpf = "";
    this.telefone = "";
    this.biografia = "";
  }

}