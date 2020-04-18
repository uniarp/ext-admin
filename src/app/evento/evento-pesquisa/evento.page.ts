import { Component, OnInit } from '@angular/core';
import {RouterModule, Routes , Router} from '@angular/router';
import { Evento, EventosService } from '../eventos.service';

@Component({
  selector: 'app-evento',
  templateUrl: './evento.page.html',
  styleUrls: ['./evento.page.scss'],
})
export class EventoPage implements OnInit {

  evento: Evento;

  constructor(
    private router: Router,
    private eventosService: EventosService
  ) { }

  ngOnInit() {
    this.listar();
  }

  public adicionar() {
    this.router.navigate(['/evento-cadastro']);
  }

  editarCadastro(codEvento){
    console.log(codEvento);
    this.router.navigate(['/evento-cadastro', codEvento]);
  }


  public async excluir(codEvento: number){
    console.log('excluir '+codEvento);
    await this.eventosService.excluir(codEvento);
    this.listar();
  }

  public async listar() {
    this.evento = await this.eventosService.listar();
  }

  async cancelar(codEvento) {
    console.log();
    this.router.navigate(['/evento-cancelar/', codEvento]);
  }
}
