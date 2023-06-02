import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {FirebaseAppProvider} from 'reactfire'

const firebaseConfig = {
  apiKey: "AIzaSyB7bV0JkTgjMgeHBSz7V7uNyIy-0s4ddWc",
  authDomain: "adviters-mate.firebaseapp.com",
  projectId: "adviters-mate",
  storageBucket: "adviters-mate.appspot.com",
  messagingSenderId: "234219169272",
  appId: "1:234219169272:web:47e04bc741cfe1d924620d",
  measurementId: "G-21Q6XP5MRL"
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <FirebaseAppProvider firebaseConfig={firebaseConfig}>
    <Suspense fallback={'Conectando'}>
      <App/>
    </Suspense>
  </FirebaseAppProvider>
)
