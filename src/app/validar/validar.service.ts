import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ValidarService {
  validarUrl = 'https://uniarpextensao.herokuapp.com/public';
  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  validacaoDocumento(token: string):Promise<any>{
    return this.http.get<any>(`${this.validarUrl}/documento/validar/${token}`)
    .toPromise();
  }
}
