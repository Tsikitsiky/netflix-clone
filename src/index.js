import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './app';
import { GlobalStyles } from './global-styles';
import {FirebaseContext} from './context/firebase'

const config = {
    apiKey: "AIzaSyA9LX0lGjTkVfXBXfY1pypgowNMgFkPLuY",
    authDomain: "netflix-onja-rs.firebaseapp.com",
    projectId: "netflix-onja-rs",
    storageBucket: "netflix-onja-rs.appspot.com",
    messagingSenderId: "251269401153",
    appId: "1:251269401153:web:b7ef14a8f5d26e7fab14c0",
}

// import { seedDatabase } from './seed';

const firebase = window.firebase.initializeApp(config);
// seedDatabase(firebase);

ReactDOM.render(
    <>
        <FirebaseContext.Provider value={{firebase: window.firebase}}>
            <GlobalStyles />
            <App />
        </FirebaseContext.Provider>
    </>, document.getElementById('root'));
