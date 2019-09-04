import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { User } from '../../models/user';
import { AngularFireAuth } from 'angularfire2/auth';
import { RegisterPage } from '../register/register';
import { TabsPage } from '../tabs/tabs';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user = {} as User;

  constructor(private angularAuth: AngularFireAuth, public alertCtrl: AlertController,
    public navCtrl: NavController, public navParams: NavParams) {
  }

  register(){
    this.navCtrl.push(RegisterPage);
  }

  async login(user: User){
    try{
      await this.angularAuth.auth.signInWithEmailAndPassword(user.email, user.password);
      this.navCtrl.setRoot(TabsPage);
    }catch{
      const alert = this.alertCtrl.create({
        title: 'แจ้งเตือน',
        subTitle: 'Email หรือ Password ไม่ถูกต้อง',
        buttons: ['ตกลง']
      });
      alert.present();
    }
  }

}
