import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  usuarioUrl = "https://uniarpextensao.herokuapp.com/public/usuarios";

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  cadastrar(usuario: Usuario): Promise<Usuario>{
    return this.http.post<Usuario>(`${this.usuarioUrl}/cadastrar`, usuario)
      .toPromise();
  }
}

export class Usuario {
  id: number;
  nome: string;
  email: string;
  cpf: string;
  senha: string;
}