import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-evento-cadastro',
  templateUrl: './evento-cadastro.page.html',
  styleUrls: ['./evento-cadastro.page.scss'],
})
export class EventoCadastroPage implements OnInit {

  evento = new Evento();

  constructor(
    public voluntarioService: EventoService,
    private router: Router,
    private route: ActivatedRoute,
    public toast: ToastController,
    public handler: ErrorHandlerService,
    private alert: AlertsService
  ) { }

  ngOnInit() {
      console.log(this.route.snapshot.params);
    const codEvento = this.route.snapshot.params.codEvento;

    if (codEvento) {
      this.carregarEvento(codEvento);
    }

    this.atualizarTitulo();
  }

  get editando() {
    console.log('Teste');
    if (this.evento.codEvento) {
      return true;
    }
    return false;
  }

  atualizarTitulo() {
    if (this.editando) {
      this.evento = 'Alterar ';
    }
  }

  carregarEvento(codEvento: number) {
    this.eventoService.listaEvento(codEvento)
      .then(data => {
        console.log(data);
        this.evento = data;
      })
      .catch(erro => this.handler.handleError(erro));
  }

  gravar() {
    this.evento.codEvento = this.evento.codEvento ? this.evento.codEvento : null;
    this.eventoService.cadastrar(this.evento)
      .then(() => {
        this.alert.alertaToast(this.evento.codEvento ? 'Evento Alterado com Sucesso' : 'Evento Cadastrado com Sucesso',
          'success');
        this.router.navigate(['evento-pesquisa']);
      })
      .catch(erro => this.handler.handleError(erro));
  }
}



  }

}
