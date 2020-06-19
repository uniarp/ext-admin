import { AlertController } from '@ionic/angular';
import { LoginService } from './login.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.page.html',
  styleUrls: ['./login-admin.page.scss'],
})
export class LoginAdminPage implements OnInit {

  email: string;
  senha: string;
  password_type = 'password';

  constructor(
    public router: Router,
    private loginService: LoginService,
    public alertController: AlertController,
  ) { }

  ngOnInit() {

  }
  acessar() {
    this.loginService.login(this.email, this.senha)
      .then(data => {
        console.log(data);
        this.router.navigate(['evento-pesquisa']);
        this.email = '';
        this.senha = '';
      })
      .catch(erro => {
        console.log(erro);
        if (erro.code === "auth/user-not-found" || erro.code === "auth/wrong-password") {
          this.alertaErro();
        }
      });
  }

  exibeSenha() {
    this.password_type = this.password_type === 'text' ? 'password' : 'text';
  }

  async alertaErro(){
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Login Inválido',
      message: 'Verifique seu e-mail e senha e tente novamente',
      buttons: ['OK']
    });
    await alert.present();
  }

}
