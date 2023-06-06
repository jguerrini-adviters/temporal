import { useEffect, useState } from 'react'
import './App.css'
import 'firebase/auth'
import {initializeApp} from 'firebase/app'
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth'

function App() {

  const [savedTo, setSavedTo] = useState(null)

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

    setSavedTo(accessToken)

    console.log(accessToken)

  }

  const cors = async () => {

    if (!savedTo) throw new Error('Primero obtené un token')

    fetch('https://api-mate.herokuapp.com/employees', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${savedTo}`
      }
    }).then((res) => res.json()).then(respo => console.log(respo))
      .catch(e => console.log(e))

  }

  return (
    <div>
      <input id='user'/>
      <input id='pass'/>
      <button onClick={test}>TRY ME</button>
      <button onClick={cors}>TRY CORS</button>
    </div>
  )
}

export default App
