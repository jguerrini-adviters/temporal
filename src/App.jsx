import { useEffect } from 'react'
import './App.css'
import 'firebase/auth'
import {initializeApp} from 'firebase/app'
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth'

function App() {

  const fapp = initializeApp({
    apiKey: "AIzaSyB7bV0JkTgjMgeHBSz7V7uNyIy-0s4ddWc",
    authDomain: "adviters-mate.firebaseapp.com",
    projectId: "adviters-mate",
    storageBucket: "adviters-mate.appspot.com",
    messagingSenderId: "234219169272",
    appId: "1:234219169272:web:47e04bc741cfe1d924620d",
    measurementId: "G-21Q6XP5MRL"
  });

  const test = async () => {

    const email = document.getElementById('user').value || 'joaquin.guerrini@adviters.com'
    const pass = document.getElementById('pass').value ||'testing'

    console.log('login in')

    const auth = getAuth(fapp)

    const {user: {accessToken}} = await signInWithEmailAndPassword(auth, email, pass)

    console.log(accessToken)

  }

  return (
    <div>
      <input id='user'/>
      <input id='pass'/>
      <button onClick={test}>TRY ME</button>
    </div>
  )
}

export default App
