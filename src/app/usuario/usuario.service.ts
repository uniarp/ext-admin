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

  pesquisar(): Promise<Usuario> {
    return this.http.get<Usuario>(this.usuarioUrl + '/listar')
      .toPromise();
  }

  excluir(codUsuario: number): Promise<Usuario> {
    return this.http.delete<Usuario>(`${this.usuarioUrl}/excluir/${codUsuario}`)
      .toPromise();
  }

  listaUsuario(codUsuario: number): Promise<Usuario>{
    return this.http.get<Usuario>(`${this.usuarioUrl}/listar/${codUsuario}`)
    .toPromise()
    .then( data => {
      return data[0];
    });
  }

  cadastrar(usuario: Usuario): Promise<Usuario>{
    console.log(usuario);
    return this.http.post<Usuario>(`${this.usuarioUrl}/cadastrar`, usuario)
      .toPromise();
  }

}

export class Usuario {
  codUsuario: number;
  nome: string;
  email: string;
  cpf: string;
  senha: string;

  constructor () {
    this.codUsuario = null;
    this.cpf = '';
  }
}