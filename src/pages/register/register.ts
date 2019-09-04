import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { User } from '../../models/user';
import { AngularFireAuth } from 'angularfire2/auth';
import { LoginPage } from '../login/login';


@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  user =  {} as User;

  constructor(private angularAuth: AngularFireAuth, public alertCtrl: AlertController,
    public navCtrl: NavController, public navParams: NavParams) {
  }

  async register(user: User){
    try{
      await this.angularAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
      this.navCtrl.setRoot(LoginPage);
    }catch(e){
      const alert = this.alertCtrl.create({
        title: 'แจ้งเตือน',
        subTitle: e,
        buttons: ['OK']
      });
      alert.present();
    }
  }

}
