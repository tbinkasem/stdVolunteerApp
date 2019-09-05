import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Grade } from '../../models/gpa';
import { GpaServiceProvider } from '../../providers/gpa-service/gpa-service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  grades: {} | Grade[];
  sub: Subscription;
  errorMessage: string;

  constructor(private gpaService: GpaServiceProvider,
              public navParams: NavParams,
              public navCtrl: NavController) {
  }

  private getGrade(){
    this.sub = this.gpaService.getGrade().subscribe(
      (res: any) => this.grades = res,
      (error: any) => this.errorMessage = <any> error
    )
  }

  ionViewWillEnter(){
    this.getGrade();
  }

  ionViewWillLeave(){
    this.sub.unsubscribe();
  }


}
