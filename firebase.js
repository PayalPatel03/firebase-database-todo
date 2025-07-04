// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAu4Zj899KyBp0L7lok8fPw6MG8MASwtpQ",
  authDomain: "fir-database-todo.firebaseapp.com",
  databaseURL: "https://fir-database-todo-default-rtdb.firebaseio.com",
  projectId: "fir-database-todo",
  storageBucket: "fir-database-todo.firebasestorage.app",
  messagingSenderId: "725330239895",
  appId: "1:725330239895:web:31c87a99a448db3f3364d2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);