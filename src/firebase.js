import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth';

const fireBaseConfig = {
	// For Firebase JS SDK v7.20.0 and later, measurementId is optional
    apiKey: "AIzaSyAL-9Qqh8oPHiLpiEGjZvl_9FrfCK3q1Ww",
    authDomain: "finntracker2.firebaseapp.com",
    projectId: "finntracker2",
    storageBucket: "finntracker2.appspot.com",
    messagingSenderId: "155052645734",
    appId: "1:155052645734:web:ce4630b7472c2f11a27ca7",
    measurementId: "G-PZKX15PVRG"
}
firebase.initializeApp(fireBaseConfig)
firebase.auth();

export default firebase;

