

import { initializeApp } from "firebase/app"
import { getAuth, FacebookAuthProvider} from "firebase/auth"
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyA_DWiDNWwNhJ-m-MScLbWwBsqMkZvOTjE",
  authDomain: "chat-app-ac516.firebaseapp.com",
  projectId: "chat-app-ac516",
  storageBucket: "chat-app-ac516.appspot.com",
  messagingSenderId: "480861575369",
  appId: "1:480861575369:web:717e9d07a1adadd30ad518"
};
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)
const fbProvider = new FacebookAuthProvider()

export {
  auth, 
  db,
  fbProvider
}






