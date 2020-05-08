import { Injectable } from '@angular/core';
import { Participante } from '../participante/participante-service.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EscolherParticipanteService {

  participanteUrl = 'https://uniarpextensao.herokuapp.com/public/participantes';

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  listar(): Promise<Participante> {
    return this.http.get<Participante>(this.participanteUrl + `/listar`, this.httpOptions)
      .toPromise();
  }
}
