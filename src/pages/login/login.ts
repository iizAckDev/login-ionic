import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController, Loading } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service';
import { RegisterPage } from '../register';
import { HomePage } from '../home';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  loading : Loading;
  registerCredentials = { email : '', password : '' };

  constructor(
    private nav: NavController, 
    private auth: AuthService, 
    private alertCtrl: AlertController, 
    private loadingCtrl: LoadingController
  ) {}
 
  public createAccount() {
    this.nav.push(RegisterPage);
  }

  public login(){
    this.showLoading();
    this.auth.login( this.registerCredentials).subscribe(allowed => {
      if( allowed ){
        setTimeout( () => {
          this.loading.dismiss();
          this.nav.setRoot(HomePage);
        });
      } else {
        this.showError( "Acceso Denegado" );
      }
    },
    error => {
      this.showError(error);
    });
  }

  showLoading(){
    this.loading = this.loadingCtrl.create({
      content: 'Por favor espere...'
    });
    this.loading.present();
  }

  showError(text){
    setTimeout(()=>{
      this.loading.dismiss();
    });

    let alert = this.alertCtrl.create({
      title: 'Error',
      subtitle: text,
      buttons: ['OK']
    });
    alert.present(prompt);
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Login');
  }

}
