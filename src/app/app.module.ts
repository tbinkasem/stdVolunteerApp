import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { SQLite } from '@ionic-native/sqlite';
import { Toast } from '@ionic-native/toast';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { HttpModule } from '@angular/http';


import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { AdddataPage } from '../pages/adddata/adddata';
import { EditdataPage } from '../pages/editdata/editdata';
import { FIREBASE_CONFIG } from './app.firebase.config';
import { GpaServiceProvider } from '../providers/gpa-service/gpa-service';
import { AboutPage } from '../pages/about/about';

@NgModule({
  declarations: [
    MyApp,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    RegisterPage,
    AdddataPage,
    EditdataPage,
    AboutPage
  ],
  imports: [
    HttpModule,
    AngularFireAuthModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    RegisterPage,
    AdddataPage,
    EditdataPage,
    AboutPage
  ],
  providers: [
    SQLite,
    Toast,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GpaServiceProvider
  ]
})
export class AppModule {}
