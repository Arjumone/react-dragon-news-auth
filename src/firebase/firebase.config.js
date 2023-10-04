// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAntCSXQkuzBvYLc4lpxJe5Vw1NKqkMhQY",
  authDomain: "react-dragon-news-auth-98e19.firebaseapp.com",
  projectId: "react-dragon-news-auth-98e19",
  storageBucket: "react-dragon-news-auth-98e19.appspot.com",
  messagingSenderId: "114409729603",
  appId: "1:114409729603:web:c34a420009addf30a12ef6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app