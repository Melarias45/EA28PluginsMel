import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { Clipboard } from '@capacitor/clipboard';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent],
})
export class HomePage {
  constructor() { }

  writeToClipboard = async () => {
    await Clipboard.write({
      string: "Hello World!"
    });
  };
  checkClipboard = async () => {
    const { type, value } = await Clipboard.read();

    console.log(`Got ${type} from clipboard: ${value}`);
  };

}
