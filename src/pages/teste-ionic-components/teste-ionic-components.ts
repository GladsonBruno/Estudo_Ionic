import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ActionSheetController, AlertController } from 'ionic-angular';

@Component({
    selector: 'teste-ionic-components',
    templateUrl: 'teste-ionic-components.html'
})

export class teste_ionic_component{
    title: 'Teste Ionic Components';

    constructor(public navCtrl: NavController) {}

}