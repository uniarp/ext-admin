import { Component, OnInit, Input } from '@angular/core';
import { EventosService } from '../evento/eventos.service';
import { ErrorHandlerService } from '../core/services/error-handler.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ListaInscritosPage } from '../evento/lista-inscritos/lista-inscritos.page';

@Component({
  selector: 'app-imprimir-inscritos',
  templateUrl: './imprimir-inscritos.page.html',
  styleUrls: ['./imprimir-inscritos.page.scss'],
})
export class ImprimirInscritosPage implements OnInit {
  inscritos: any[] = [];
  @Input() codEvento: number;  
  
  constructor(
    private eventoService: EventosService,
    private erroHandler: ErrorHandlerService,
    public router: Router,
    private route: ActivatedRoute,
    public modalController: ModalController
  ) { }

  ngOnInit() {
    this.codEvento = this.route.snapshot.params.codEvento;
    console.log(this.codEvento);
    console.log('chegou aqui');
    this.listarInscritos(this.codEvento);
    this.imprimir();
  }

  async imprimir(){
    await this.delay(3000);
    await print();
    this.router.navigate(['evento-pesquisa']);

  }

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }


  listarInscritos(codEvento: number) {
    this.eventoService.listarInscritos(codEvento)
      .then(data => {
        this.inscritos = data;
        console.log(data);
      })
      .catch(erro => this.erroHandler.handleError(erro));
  }
}
