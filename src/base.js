import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    authDomain: "burgerz-d5f1f.firebaseapp.com",
    databaseURL: "https://burgerz-d5f1f-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "burgerz-d5f1f",
    storageBucket: "burgerz-d5f1f.appspot.com",
    messagingSenderId: "750907191421",
    appId: "1:750907191421:web:877f87d454f3d74076c114"

})

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;