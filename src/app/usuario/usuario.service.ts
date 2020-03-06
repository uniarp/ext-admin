import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  usuarioUrl = "https://uniarpextensao.herokuapp.com/public";

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  cadastrar(): Promise<Usuario>{
    return this.http.get<Usuario>(`${this.usuarioUrl}/testeconte`, this.httpOptions)
      .toPromise();
  }
}

export class Usuario {
  id: number;
  nome: string;
  email: string;
  cpf: string;
  profissao: string;
  senha: number;
}