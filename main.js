import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as admin from 'firebase-admin';
import { Button } from 'reactstrap';

var admin = require('firebase-admin');
var serviceAccount = require("path/to/serviceAccountKey.json");
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://escuelaparapadres-bf702.firebaseio.com'
  });

  var refreshToken; // Get refresh token from OAuth2 flow

  admin.initializeApp({
    credential: admin.credential.refreshToken(refreshToken),
    databaseURL: 'https://escuelaparapadres-bf702.firebaseio.com'
  });

  firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
  });