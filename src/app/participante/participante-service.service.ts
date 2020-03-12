import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ParticipanteServiceService {
  participanteUrl = "https://uniarpextensao.herokuapp.com/public/participantes";

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  cadastrar(participante: Participante): Promise<Participante>{
    participante.codParticipante = null;
    return this.http.post<Participante>(`${this.participanteUrl}/cadastrar`, participante)
      .toPromise();
  }

  listar(): Promise<any>{
    return this.http.get<any>(this.participanteUrl + `/participantes/listar`, this.httpOptions)
    .toPromise();
  }

  excluir(id): Promise<any>{
    console.log(id);
    return Promise.resolve(true);
  }
}

export class Participante {
  codParticipante: number;
  nome: string;
  email: string;
  cpf: string;
  senha: string;
  telefone: string;
}
