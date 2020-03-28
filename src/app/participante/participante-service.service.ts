import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class ParticipanteServiceService {
  participanteUrl = 'https://uniarpextensao.herokuapp.com/public/participantes';

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  async listaParticipante(codParticipante: number): Promise<Participante> {
    return this.http.get<Participante>(`${this.participanteUrl}/listar/${codParticipante}`)
      .toPromise()
      .then(data => {
        return data[0];
      });
  }

  cadastrar(participante: Participante): Promise<Participante> {
    console.log(participante);
    return this.http.post<Participante>(`${this.participanteUrl}/cadastrar`, participante)
      .toPromise();
  }

  listar(): Promise<Participante> {
    return this.http.get<Participante>(this.participanteUrl + `/listar`, this.httpOptions)
      .toPromise();
  }

  excluir(codParticipante: number): Promise<Participante> {
    return this.http.delete<Participante>(`${this.participanteUrl}/excluir/${codParticipante}`)
      .toPromise();
  }
}

export class Participante {
  codParticipante: number;
  nome: string;
  cpf: string;
  ra: number;
  senha: string;
  telefone: string;
  email: string;
}
