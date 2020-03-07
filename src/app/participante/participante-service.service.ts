import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

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

  cadastrar(): Promise<Participante>{
    return this.http.get<Participante>(`${this.participanteUrl}/participantes/cadastrar`, this.httpOptions)
      .toPromise();
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
