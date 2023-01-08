// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import {  collection,
          getFirestore,
          addDoc,
          getDocs,
          onSnapshot} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyDQ7ftWjc6lSOkautve_Yuksdf3mBuGfGY",
  authDomain: "fir-javascript-crud-29c0d.firebaseapp.com",
  projectId: "fir-javascript-crud-29c0d",
  storageBucket: "fir-javascript-crud-29c0d.appspot.com",
  messagingSenderId: "236490989810",
  appId: "1:236490989810:web:644fe7cd7607558e8eb06b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export const saveTask = (title,description) => 
  addDoc(collection(db, "tasks"), {title,description})

export const getTasks = () => getDocs(collection(db, "tasks"))

export const onGetTasks = (callback) => onSnapshot(collection(db, "tasks"), callback)
/*export {onSnapshot,
        collection, 
        db}*/