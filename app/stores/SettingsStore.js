
import * as firebase from 'firebase';
import MobxFirebaseStore from 'mobx-firebase-store';
const config = {
    apiKey: "AIzaSyCkhW7fMIQH5cQNMuHFTLEfdyz7WszfIqI",
    authDomain: "eesta-f62ff.firebaseapp.com",
    databaseURL: "https://eesta-f62ff.firebaseio.com",
    storageBucket: "eesta-f62ff.appspot.com",
    messagingSenderId: "922839198998"
  };

export default class SettingsStore extends MobxFirebaseStore {
  constructor() {
    firebase.initializeApp(config);
    /* pass reference of database to MobxFirebaseStore
     * which we are inheriting from */
    super(firebase.database().ref());
    this.splashTime = 1000;
    this.splashImg = require('../../images/splash.jpg');
    this.loginBG = require('../../images/login.jpeg');
    this.startHero = require('../../images/start.jpeg');
    this.goalHero = require('../../images/books.jpeg');
    this.timeHero = require('../../images/time.jpeg');
    this.incentiveHero = require('../../images/incentive.jpeg');
  }

  get SplashTime() {
    return this.splashTime;
  }

  get SplashImg() {
    return this.splashImg;
  }

  get LoginBG() {
    return this.loginBG;
  }

  get StartHero() {
    return this.startHero;
  }

  get GoalHero() {
    return this.goalHero;
  }

  get TimeHero() {
    return this.timeHero;
  }

  get IncentiveHero() {
    return this.incentiveHero;
  }
}
