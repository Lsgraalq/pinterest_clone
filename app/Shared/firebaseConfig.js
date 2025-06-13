// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC644GjBGJbBYFTHGiiyYlqda4dqEW_Ya4",
  authDomain: "pinterest-clone-007.firebaseapp.com",
  projectId: "pinterest-clone-007",
  storageBucket: "pinterest-clone-007.firebasestorage.app",
  messagingSenderId: "623341187474",
  appId: "1:623341187474:web:fd4ab86f47791cbfc1514b",
  measurementId: "G-NRJKTV35TK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app