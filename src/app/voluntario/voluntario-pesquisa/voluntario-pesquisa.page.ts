import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Voluntario, VoluntarioService } from '../voluntario.service';


@Component({
  selector: 'app-voluntario-pesquisa',
  templateUrl: './voluntario-pesquisa.page.html',
  styleUrls: ['./voluntario-pesquisa.page.scss'],
})
export class VolunatrioPesquisaPage implements OnInit {

  voluntario: Voluntario;

  constructor(
    private voluntarioService: VoluntarioService,
    public router: Router
  ) { }

  ngOnInit() {
    this.listar();
  }

  inserir(){
    this.router.navigate(['voluntario-cadastro']);
  }
  
  async listar() {
    this.voluntario = await this.voluntarioService.listar();

  }
  
  async excluir(codVoluntario){
    this.voluntario = await this.voluntarioService.excluir(codVoluntario);
    this.listar();
  }
  
  novoCadastro(){
    this.router.navigate(['voluntario-cadastro']);
  }

  async alterar(){
    // this.voluntario = await this.voluntarioService.alterar();
  }


}
