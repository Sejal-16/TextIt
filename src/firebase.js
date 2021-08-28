import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp(
    {
        apiKey: "AIzaSyBFOSPINLOUKCk5HQmPI93r7iRY_OLdA7w",
        authDomain: "textit-f92a2.firebaseapp.com",
        projectId: "textit-f92a2",
        storageBucket: "textit-f92a2.appspot.com",
        messagingSenderId: "350866667813",
        appId: "1:350866667813:web:abdc54659cc9d2619b42cc"
    }

).auth(); 