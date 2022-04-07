import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyCA_uv1YENK9xX96dBgOBN6lPHKTyITLHg",
    authDomain: "cllit-c33ca.firebaseapp.com",
    projectId: "cllit-c33ca",
    storageBucket: "cllit-c33ca.appspot.com",
    messagingSenderId: "629796329553",
    appId: "1:629796329553:web:793c9a65b7d7c039188070",
};
firebase.initializeApp(firebaseConfig);

const fb = firebase.initializeApp(firebaseConfig);
export { fb };