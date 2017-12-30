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

  testRadioOpen: boolean;
  testRadioResult: string;

  mostrarRadioAlert(){
    let alert = this.alertCtrl.create();
    alert.setTitle("Cor do sabre de luz");
    alert.addInput({
      type: 'radio',
      label: 'Verde',
      value: 'Verde',
      checked: true
    });

    alert.addButton("Cancelar");
    alert.addButton({
      text: 'Ok',
      handler: data => {
        this.testRadioOpen = false;
        this.testRadioResult = data;
        console.log(data + " selecionado");
      }
    });

    alert.present();
  }

  testCheckboxOpen: boolean;
  textCheckboxResult: Array<string>;

  mostrarCheckbox(){
    let alert = this.alertCtrl.create();
    alert.setTitle("Quais cores você gosta?");

    alert.addInput({
      type: 'checkbox',
      label: 'Azul' ,
      value: 'Azul',
      checked: true
    });

      alert.addInput({
      type: 'checkbox',
      label: 'Vermelho' ,
      value: 'Vermelho'
    });
    
    alert.addInput({
      type: 'checkbox',
      label: 'Verde' ,
      value: 'Verde'
    });
    
    alert.addInput({
      type: 'checkbox',
      label: 'Amarelo' ,
      value: 'Amarelo'
    });
    
    alert.addInput({
      type: 'checkbox',
      label: 'Rosa' ,
      value: 'Rosa'
    });

    alert.addButton('Cancelar');

    alert.addButton({
      text: 'Ok',
      handler: data => {
        console.log(data);
        this.testCheckboxOpen = true;
        this.testRadioResult = data;
      }
    });
    alert.present();
  }

}
