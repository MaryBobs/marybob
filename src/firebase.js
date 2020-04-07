import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
    apiKey: "AIzaSyBlyLZUHQyII9VQBZUqq1SXzJYIP5gGyWY",
    authDomain: "marybobs.firebaseapp.com",
    databaseURL: "https://marybobs.firebaseio.com",
    projectId: "marybobs",
    storageBucket: "marybobs.appspot.com",
    messagingSenderId: "355907512906",
    appId: "1:355907512906:web:8b8be6eb0cf7d0e2d294b3",
    measurementId: "G-VNVE11H3N6"
};
firebase.initializeApp(config);

export default firebase;