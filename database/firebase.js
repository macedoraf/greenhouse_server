const firebase = require('firebase')

const firebaseConfig = {
    apiKey: "AIzaSyC522BWwzidnRBnyrXSak6_y4nrfsdynbg",
    authDomain: "adm-estufinha.firebaseapp.com",
    databaseURL: "https://adm-estufinha.firebaseio.com",
    projectId: "adm-estufinha",
    storageBucket: "adm-estufinha.appspot.com",
    messagingSenderId: "606221566388",
    appId: "1:606221566388:web:0dee90cb825d4fd0b4f2e1"
  };

  firebase.initializeApp(firebaseConfig);

  module.exports = firebase;