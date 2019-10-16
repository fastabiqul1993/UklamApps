import firebase from 'firebase';
var firebaseConfig = {
  apiKey: 'AIzaSyDM8nTOKmeyfjwxlXvoppVAdApnzwYtjcY',
  authDomain: 'uklam-6440c.firebaseapp.com',
  databaseURL: 'https://uklam-6440c.firebaseio.com',
  projectId: 'uklam-6440c',
  storageBucket: 'uklam-6440c.appspot.com',
  messagingSenderId: '545117624595',
  appId: '1:545117624595:web:2df7320727142a1237a2e6',
  measurementId: 'G-MW4HNPL8CE',
};
// Initialize Firebase
let app = firebase.initializeApp(firebaseConfig);

export const Database = app.database();
export const Auth = app.auth();
