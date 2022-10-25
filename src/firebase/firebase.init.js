import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBAIV6vhTsgvCuuYo3bAaMxcfbASqAEQ1o",
  authDomain: "skill-hunter-adbb0.firebaseapp.com",
  projectId: "skill-hunter-adbb0",
  storageBucket: "skill-hunter-adbb0.appspot.com",
  messagingSenderId: "336423457565",
  appId: "1:336423457565:web:5a21e9bbb0460ef6d8c7f4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;