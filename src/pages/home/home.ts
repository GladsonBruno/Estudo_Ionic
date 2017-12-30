import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ActionSheetController, AlertController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  title: string = "Index";

  constructor(public navCtrl: NavController, public actionSheetController: ActionSheetController,
              public alertCtrl: AlertController) {

  }

  mostrarActionSheet(){
    let actionSheet = this.actionSheetController.create({
      title: "Album",
      buttons: [
        {
          text: 'Destructive',
          role: 'destructive',
          handler: () => {
            alert("Destructive");
          }
        },{
          text: 'Archive',
          handler: () => {
            alert("Archive");
          }
        },{
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            alert("Cancel");
          }
        }
      ]
    });

    actionSheet.present();
  }

  mostrarAlertaBasico(){
    let alert = this.alertCtrl.create({
      title: "Alerta Basico",
      subTitle: "Teste Alerta Basico",
      buttons: ['OK']
    });
    alert.present();
  }

}
