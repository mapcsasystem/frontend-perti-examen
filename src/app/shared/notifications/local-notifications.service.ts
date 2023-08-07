import { Injectable } from '@angular/core';
import { ToastController, Platform } from '@ionic/angular';
import {
  LocalNotifications,
  ScheduleOptions,
} from '@capacitor/local-notifications';

@Injectable({
  providedIn: 'root',
})
export class LocalNotificationsService {
  constructor(
    private readonly _toast: ToastController,
    private platform: Platform
  ) {}

  async scheduleNotification(title: string, body: string, largeBody: string) {
    let options: ScheduleOptions = {
      notifications: [
        {
          id: 111,
          title,
          body,
          largeBody,
        },
      ],
    };

    try {
      if (this.platform.is('android')) {
        const r = await LocalNotifications.schedule(options);
      } else {
        const toast = await this._toast.create({
          animated: true,
          message: largeBody,
          duration: 5000,
          buttons: ['Aceptar'],
        });
        await toast.present();
      }
    } catch (error) {
      console.log(error);
    }
  }
}
