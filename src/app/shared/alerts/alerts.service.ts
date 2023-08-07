import { Injectable } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class AlertsService {
  constructor(
    private readonly _toast: ToastController,
    private readonly _alert: AlertController
  ) {}

  async showToast(message: string): Promise<void> {
    const toast = await this._toast.create({
      animated: true,
      message,
      duration: 5000,
      buttons: ['Aceptar'],
    });
    await toast.present();
  }

  async showAlert(message: string): Promise<void> {
    const alert = await this._alert.create({
      header: 'Registro Cargado.',
      message,
      htmlAttributes: { message },
      buttons: ['Aceptar'],
    });

    await alert.present();
  }
}
