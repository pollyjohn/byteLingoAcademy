import { initializeApp } from  "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";




const firebaseConfig = {
    apiKey: "AIzaSyC8kjvAGjni0ryp3OiNF3CwfPNB2aJTCvM",
    authDomain: "bytelingo-academy.firebaseapp.com",
    projectId: "bytelingo-academy",
    storageBucket: "bytelingo-academy.firebasestorage.app",
    messagingSenderId: "33197372741",
    appId: "1:33197372741:web:6cd4b9c4074bd6858f7a2c",
    measurementId: "G-45DFSE4RLD"
  };


const app = initializeApp(firebaseConfig)

//inputs

const submit = document.getElementById('submit');
submit.addEventListener("click", function(event) {
    event.preventDefault()

    const email = document.getElementById('email').value; 
    const name = document.getElementById('name').value;


    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    alert("Creating Account...")
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
    // ..
  });
})


