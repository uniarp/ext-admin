import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ParticipanteServiceService {
  participanteUrl = "https://uniarpextensao.herokuapp.com/public";

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

<<<<<<< HEAD
  cadastrar(): Promise<Participante>{
    return this.http.get<Participante>(`${this.participanteUrl}/participantes/cadastrar`, this.httpOptions)
      .toPromise();
=======
  listar(): Promise<any>{
    return this.http.get<any>(this.usuarioUrl + `/participantes/listar`, this.httpOptions)
    .toPromise();
>>>>>>> d9c935b2615e6c7096fece114a5947d93150b9ee
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
