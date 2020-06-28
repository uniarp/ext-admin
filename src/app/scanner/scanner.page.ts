import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { EventosService, Evento } from '../evento/eventos.service';
import { ErrorHandlerService } from '../core/services/error-handler.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ModalController, ToastController, NavParams } from '@ionic/angular';
import { AlertsService } from '../core/services/alerts.service';
import { ZXingScannerComponent } from '@zxing/ngx-scanner';
import { Result } from '@zxing/library';

@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.page.html',
  styleUrls: ['./scanner.page.scss'],
})
export class ScannerPage implements OnInit {
  inscritos: any[] = [];
  @Input() codEvento: number;
  evento = new Evento();
  @ViewChild('scannerQr', { static: false })
  scannerQr: ZXingScannerComponent;
  qrResultString: string;
  constructor(
    public eventoService: EventosService,
    public erroHandler: ErrorHandlerService,
    public handler: ErrorHandlerService,
    public router: Router,
    public navParams: NavParams,
    public route: ActivatedRoute,
    public alert: AlertsService,
    public modalController: ModalController
  ) { }

  ngOnInit() {
    let codEvento: number = this.navParams.get('codEvento');
    //this.codEvento = this.route.snapshot.params.codEvento;
    console.log(this.codEvento);
    if(this.codEvento){
      this.carregarEvento(this.codEvento);
      this.listarInscritos(codEvento);
    }    
  }

  handleQrCodeResult(resultString: string) {
    this.qrResultString = "Presença validada para "+resultString+" !";
    this.alert.alertaToast(this.qrResultString, 'success');
    console.log('Result: ', resultString);
    this.validarFrequencia();
}

  carregarEvento(codEvento: number) {
    this.eventoService.listaEvento(codEvento)
      .then(data => {
        console.log(data);
        this.evento = data;
      })
      .catch(erro => this.handler.handleError(erro));
  }

  listarInscritos(codEvento: number) {
    this.eventoService.listarInscritos(codEvento)
      .then(data => {
        this.inscritos = data;
        console.log(data);
      })
      .catch(erro => this.erroHandler.handleError(erro));
  }


  validarFrequencia() {
    this.eventoService.validar(this.inscritos)
      .then(() => {
      })
      .catch(erro => this.handler.handleError(erro));
  }

  voltar() {
    this.modalController.dismiss();
  }
}
