import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EscolherParticipanteService {

  participanteUrl = 'https://uniarpextensao.herokuapp.com/public/eventos';

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  listar(codEvento: Number): Promise<any> {
    return this.http.get<any>(this.participanteUrl + `/participantesevento/${codEvento}`, this.httpOptions)
      .toPromise();
  }
  
}
