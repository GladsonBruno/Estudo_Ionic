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
            console.log("Destructive");
          }
        },{
          text: 'Archive',
          handler: () => {
            console.log("Archive");
          }
        },{
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log("Cancel");
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

  mostrarPromptAlert(){
    let prompt = this.alertCtrl.create({
      title: 'Email',
      message: 'Insira seu Email',
      inputs: [
        {
          name: 'titulo',
          placeholder: "Digite seu email"
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          handler: data => {
            console.log("Cancelar Clicado");
          }
        },{
          text: "Salvar",
          handler: data => {
            console.log("Email " + data.titulo + " Salvo");
          }
        }
      ]
    });

    prompt.present();
  }

  mostrarConfirmAlert(){
    let confirm = this.alertCtrl.create({
      title: 'Usar Sabre de Luz?',
      message: 'Deseja ativar o sabre de luz?',
      buttons: [
        {
          text: 'Não',
          handler: () => {
            console.log('Good Bye');
          }
        },{
          text: 'Sim',
          handler: () => {
            console.log('Tenha cuidado Jovem Padawan');
          }
        }
      ]
    });

    confirm.present();
  }

}
