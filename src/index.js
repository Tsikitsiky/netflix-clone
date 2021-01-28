import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './app';
import { GlobalStyles } from './global-styles';
import {FirebaseContext} from './context/firebase'
import dotenv from 'dotenv'

dotenv.config();

const config = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: process.env.APP_ID,
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
