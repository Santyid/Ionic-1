import { ToastController } from 'ionic-angular/components/toast/toast-controller';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {
	constructor(public toastCtrl: ToastController) {}
	status: string = 'Inicio';

	showAlert() {
		const toast = this.toastCtrl.create({
			message: 'Nice, i like this',
			showCloseButton: true,
			closeButtonText: 'Ok'
		});
		toast.present();
	}

	showAlert1() {
		const toast = this.toastCtrl.create({
			message: 'Is the moment.',
			showCloseButton: true,
			closeButtonText: 'Ok'
		});
		toast.present();
	}
}
