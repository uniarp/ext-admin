import { AlertController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth/';


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
    public auth: AngularFireAuth,
    public alert: AlertController
  ) { }

  ngOnInit() {
  }
  acessar() {
    this.auth.signInWithEmailAndPassword(this.email, this.senha)
      .then(data => {
        console.log(data);
        this.router.navigate(['evento-pesquisa']);
      })
      .catch(erro => {
        console.log(erro);
        if (erro.code === "auth/user-not-found" || erro.code === "auth/wrong-password") {
          this.presentAlert();
        }
      });


    // this.auth.onAuthStateChanged(user => {
    //   console.log(user);
    //   if (user.emailVerified) {
    //     this.router.navigate(['evento-pesquisa']);
    //   }
    // });
  }
  exibeSenha() {
    this.password_type = this.password_type === 'text' ? 'password' : 'text';
  }
  async presentAlert() {
    const alert = await this.alert.create({
      cssClass: 'my-custom-class',
      subHeader: 'E-mail ou senha Inválidos',
      message: 'Por favor, verifique seu e-mail e senha e tente novamente',
      buttons: ['OK']
    });

    await alert.present();
  }
}
