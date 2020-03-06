import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

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


}

export class Participante {
  codparticipante: number;
  nome: string;
  cpf: string;
  senha: string;
  telefone: string;
  email: string;
}
