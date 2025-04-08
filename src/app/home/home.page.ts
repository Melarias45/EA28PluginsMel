import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/angular/standalone';
import { Browser } from '@capacitor/browser';
import { AppLauncher } from '@capacitor/app-launcher';
import { Dialog } from '@capacitor/dialog';
import { Device } from '@capacitor/device';





@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton],
})
export class HomePage {
  constructor() { }

  openCapacitorSite = async () => {
    await Browser.open({ url: 'http://capacitorjs.com/' });
  };

  checkCanOpenUrl = async () => {
    const { value } = await AppLauncher.canOpenUrl({ url: 'com.getcapacitor.myapp' });

    console.log('Can open url: ', value);
  };

  openPortfolioPage = async () => {
    await AppLauncher.openUrl({ url: 'com.getcapacitor.myapp://page?id=portfolio' });
  };

  showAlert = async () => {
    await Dialog.alert({
      title: 'Stop',
      message: 'this is an error',
    });
  };

  showConfirm = async () => {
    const { value } = await Dialog.confirm({
      title: 'Confirm',
      message: `You pressed the button ;)`,
    });

    console.log('Confirmed:', value);
  };

  showPrompt = async () => {
    const { value, cancelled } = await Dialog.prompt({
      title: 'Hello',
      message: `What's your name?`,
    });

    console.log('Name:', value);
    console.log('Cancelled:', cancelled);
  };

  logDeviceInfo = async () => {
    const info = await Device.getInfo();

    console.log(info);
  };

  logBatteryInfo = async () => {
    const info = await Device.getBatteryInfo();

    console.log(info);
  };
}
