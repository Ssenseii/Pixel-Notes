import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBqmTEcRk3LhLDGY9wbJ1Bjy0lPHcJChIE",
  authDomain: "test-drive-two.firebaseapp.com",
  projectId: "test-drive-two",
  storageBucket: "test-drive-two.appspot.com",
  messagingSenderId: "940469400380",
  appId: "1:940469400380:web:5cf1d1437e909c25ece439",
  measurementId: "G-5QS6M3TL7L"
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp)
const db = getFirestore(firebaseApp);
export { auth }
export { db }