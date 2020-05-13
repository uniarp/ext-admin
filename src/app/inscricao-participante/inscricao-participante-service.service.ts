
import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter } from 'protractor';
import {Participante} from '../participante/participante-service.service'

@Injectable({
  providedIn: 'root'
})
export class InscricaoParticipanteService implements OnInit{
  participanteUrl = 'https://uniarpextensao.herokuapp.com/public/participantes';
  inscricaoUrl = 'https://uniarpextensao.herokuapp.com/public/eventos';

  constructor(private http: HttpClient) { }
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }

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

  cadastrar(inscricao: any): Promise<any> {
    console.log(inscricao);
    return this.http.post<any>(`${this.inscricaoUrl}/inscrever`, inscricao)
    .toPromise()
    .then();
  }


}

