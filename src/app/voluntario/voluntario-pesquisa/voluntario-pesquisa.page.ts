import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Voluntario, VoluntarioService } from '../voluntario.service';
import { ErrorHandlerService } from 'src/app/core/services/error-handler.service';


@Component({
  selector: 'app-voluntario-pesquisa',
  templateUrl: './voluntario-pesquisa.page.html',
  styleUrls: ['./voluntario-pesquisa.page.scss'],
})
export class VoluntarioPesquisaPage implements OnInit {

  voluntario: Voluntario;
  titulo = 'Novo ';

  constructor(
    private voluntarioService: VoluntarioService,
    public router: Router,
    private route: ActivatedRoute,
    public handler: ErrorHandlerService
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
    console.log(codVoluntario);
    this.voluntario = await this.voluntarioService.excluir(codVoluntario);
    this.listar();
  }
  
  novoCadastro(){
    this.router.navigate(['voluntario-cadastro']);
  }

  async alterar(codVoluntario){
    console.log();
    this.router.navigate(['/voluntario-cadastro/',codVoluntario]);
  }


}
