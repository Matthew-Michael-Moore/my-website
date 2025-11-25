import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBUxV0SGTKnpQiD1AIsIMBSwD5ep2Jyvo8",
  authDomain: "my-project-ab787.firebaseapp.com",
  projectId: "my-project-ab787",
  storageBucket: "my-project-ab787.appspot.com",
  messagingSenderId: "272245130222",
  appId: "1:272245130222:web:0599c99fadfe70cabd04ff",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
