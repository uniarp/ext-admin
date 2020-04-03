import { Component, OnInit } from '@angular/core';
import { Routes } from '@angular/router';
import {RouterModule , Router} from '@angular/router';
import { PalestranteService, Palestrante } from '../palestrante.service';

@Component({
  selector: 'app-palestrante-pesquisa',
  templateUrl: './palestrante-pesquisa.page.html',
  styleUrls: ['./palestrante-pesquisa.page.scss'],
})
export class PalestrantePesquisaPage implements OnInit {
  palestrante: any[];
  deuCerto: Boolean;

  constructor(
    private router: Router,
    private palestranteService: PalestranteService
  ) { }

  ngOnInit() {
    this.listar();
  }

  public async excluir(codPalestrante: number){
    console.log('excluir '+codPalestrante);
    await this.palestranteService.excluir(codPalestrante);
    this.listar();
  }

  public async listarPalestrante(codPalestrante: number){
    console.log('listar '+codPalestrante);
    // this.palestrante = await this.palestranteService.listarPalestrante(codPalestrante);
  }

  editarCadastro(codPalestrante){
    console.log(codPalestrante);
    this.router.navigate(['/palestrante-cadastro', codPalestrante]);
  }

  public adicionar() {
    this.router.navigate(['/palestrante-cadastro']);
  }
  
  public async listar() {
    this.palestrante = await this.palestranteService.listar();
  }

  public async alterar(codPalestrante: number){
    this.router.navigate(['/palestrante-cadastro']);
  }
}
