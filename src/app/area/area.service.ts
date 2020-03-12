import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AreaService {

  areaUrl = 'http://uniarpextensao.herokuapp.com/public/areas';

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  listarArea(): Promise<any> {
    return this.http.get(`${this.areaUrl}/listar`)
      .toPromise()
      .then(res => res);
  }

}

export class Area{
  codArea: number;
  nome: string;
}
