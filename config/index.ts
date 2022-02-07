// Import the functions you need from the SDKs you need

import {initializeApp} from "firebase/app"

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_DOMAIN,
  databaseURL: process.env.NEXT_PUBLIC_URL,
  projectId: process.env.NEXT_PUBLIC_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGE_ID,
  appId: process.env.NEXT_PUBLIC_API_ID,
  measurementId: process.env. NEXT_PUBLIC_MEASUREMENT_ID
};


// Initialize Firebase
const App = initializeApp(firebaseConfig)

export default App
