import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {AngularFireAuth} from 'angularfire2/auth';
import firebase from 'firebase'
import {AngularFireDatabase,FirebaseListObservable} from 'angularfire2/database-deprecated';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  reference:any;
  mytext:any;
  test:Array<any>=[];
  exe:FirebaseListObservable<any>;

  constructor( public navCtrl: NavController, private fire:AngularFireAuth,public db:AngularFireDatabase) {
    
    this.exe=db.list('/example');
  }

  addData(){
    this.reference=firebase.database().ref('/example')

    this.reference.push({
      example:this.mytext
    })
    console.log("data added");
  }

  getdata(){
    this.reference=firebase.database().ref('/example')
    this.db.list(this.reference).subscribe(suject=>{
      this.test=suject;
      console.log("subject"+suject);
    });
  }






}
