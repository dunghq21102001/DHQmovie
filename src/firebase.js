// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQ0agckNNxqROSkYt0-klWniYfvNFndP8",
  authDomain: "dflix-c1121.firebaseapp.com",
  projectId: "dflix-c1121",
  storageBucket: "dflix-c1121.appspot.com",
  messagingSenderId: "125630848260",
  appId: "1:125630848260:web:37786534b2a31fb56b8451"
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)

// Kí túc xá Khu B đại học quốc gia
// Phường Đông Hòa, Thành Phố Dĩ An, Bình Dương