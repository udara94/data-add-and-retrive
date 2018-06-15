import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';

import {AngularFireAuth} from 'angularfire2/auth';
import { timer } from 'rxjs/observable/timer';
import { SelectSearchable } from 'ionic-select-searchable';




@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;
   showSplash = true;


   

   portChange(event: { component: SelectSearchable, value: any }) {
       console.log('port:', event.value);
   }

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private afAuth: AngularFireAuth) {
  
      this.rootPage=HomePage;
      platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
      timer(3000).subscribe(() => this.showSplash = false)
    });

  }



}

