import { Component, OnInit } from '@angular/core';
import { PalestranteService, Palestrante } from '../palestrante.service';

@Component({
  selector: 'app-palestrante-pesquisa',
  templateUrl: './palestrante-pesquisa.page.html',
  styleUrls: ['./palestrante-pesquisa.page.scss'],
})
export class PalestrantePesquisaPage implements OnInit {

  palestrante: Array<Palestrante>;
  deuCerto: Boolean;

  constructor(
    private palestranteService: PalestranteService
  ) {

  }

  ngOnInit() {
    console.log('entrou');
    this.listarPalestrantes();
  }

  public removerPalestrante(idPal: string){
    this.deuCerto=this.palestranteService.removerPalestrante(idPal);
    console.log(this.deuCerto);
  }

  public adicionarPalestrante(palestrante: Palestrante) {
    this.deuCerto=this.palestranteService.adicionarPalestrante(palestrante);
    console.log(this.deuCerto);
  }
  public listarPalestrantes() {
    console.log('entrou2');
    this.palestrante = this.palestranteService.listarPalestrantes();
    console.log(this.palestrante);
  }

}
