// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
import { getDatabase, ref, set, get, child } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-database.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8kjvAGjni0ryp3OiNF3CwfPNB2aJTCvM",
  authDomain: "bytelingo-academy.firebaseapp.com",
  databaseURL: "https://bytelingo-academy-default-rtdb.firebaseio.com",
  projectId: "bytelingo-academy",
  storageBucket: "bytelingo-academy.firebasestorage.app",
  messagingSenderId: "33197372741",
  appId: "1:33197372741:web:8d0abdf40800f0648f7a2c",
  measurementId: "G-4JEYFRFJL9"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);

//get ref to database services
const db = getDatabase(app);



document.getElementById("submit").addEventListener('click', function(e){


const checkboxes = document.querySelectorAll("input[name='classtime']:checked")
const classtime = Array.from(checkboxes).map(checkbox => checkbox.value);
const email =   document.getElementById("email").value;
const sanitizedEmail = email.replace(/[.#$[\]]/g, "_");


try {
 set(ref(db, `user/${sanitizedEmail}`),
{
  username: document.getElementById("name").value,
  email: email,
  phone: document.getElementById("phone").value,
  classtime: classtime
});
  alert("Login Sucessfull  !");
} catch (error) {
  alert("ooops!")
}
})
