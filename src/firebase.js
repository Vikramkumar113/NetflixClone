
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCUJ-GEjBKiA0A_YUj0Haaw2gNc92rjmOM",
  authDomain: "netflix-clone-ee2a0.firebaseapp.com",
  projectId: "netflix-clone-ee2a0",
  storageBucket: "netflix-clone-ee2a0.appspot.com",
  messagingSenderId: "810921456921",
  appId: "1:810921456921:web:7af3d397d447d03c040188"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth();

export {app, auth};