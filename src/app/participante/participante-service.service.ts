import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ParticipanteServiceService {
  usuarioUrl = "https://uniarpextensao.herokuapp.com/public";

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  listar(): Promise<any>{
    return this.http.get<any>(this.usuarioUrl + `/participantes/listar`, this.httpOptions)
    .toPromise();
  }

  excluir(id): Promise<any>{
    console.log(id);
    return Promise.resolve(true);
  }
}

export class Participante {
  codparticipante: number;
  nome: string;
  cpf: string;
  senha: string;
  telefone: string;
  email: string;
}
