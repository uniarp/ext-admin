import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TipoAtividadeService {

  tpAtividadeUrl = "http://uniarpextensao.herokuapp.com/public/tipoAtividades";
  constructor(
    private http: HttpClient
  ) { }

  listaTpAtividade(): Promise<any> {
    return this.http.get(`${this.tpAtividadeUrl}/listar`)
      .toPromise()
      .then(res => res);
  }
}


