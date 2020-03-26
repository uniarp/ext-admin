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
  };

  pesquisar(): Promise<Usuario> {
    return this.http.get<Usuario>(this.usuarioUrl + '/listar')
      .toPromise();
  }

  excluir(codUsuario: number): Promise<Usuario> {
    return this.http.delete<Usuario>(`${this.usuarioUrl}/excluir/${codUsuario}`)
      .toPromise();
  }
}

export class Usuario {
  codUsuario: number;
  nome: string;
  cpf: string;
  telefone: string;
  email: string;
}
