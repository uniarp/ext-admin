import { Component, OnInit } from '@angular/core';
import { ValidarService } from '../validar.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { ErrorHandlerService } from 'src/app/core/services/error-handler.service';
import { AlertsService } from 'src/app/core/services/alerts.service';
import { Token } from '@angular/compiler/src/ml_parser/lexer';

@Component({
  selector: 'app-validar-certificado',
  templateUrl: './validar-certificado.page.html',
  styleUrls: ['./validar-certificado.page.scss'],
})
export class ValidarCertificadoPage implements OnInit {

  token: any[] = [];
  
  constructor(
    public validarService: ValidarService,
    private router: Router,
    private route: ActivatedRoute,
    public toast: ToastController,
    public handler: ErrorHandlerService,
    private alert: AlertsService,
  ) { }

  ngOnInit() {
  }

  passarToken(){
    
  }

  validar(token: string){
    this.validarService.validacaoDocumento(token)
    .then(res => {
      if (!Array.isArray(res)) {
        this.alert.alertaToast('Certifido não é Valido', 'success');
      } else {
        this.alert.alertaToast('Certifido Valido', 'success');
        this.passarToken = res[0];
        console.log(this.passarToken);
      }
    })
  }

}
