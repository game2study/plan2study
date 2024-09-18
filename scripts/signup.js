import { getAuth, createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js'
const auth = getAuth()
//and if this doesn't work, someone isn't going to see the light of day
document.getElementById("submitSignup").addEventListener("click", () => {
    createUserWithEmailAndPassword(auth, document.getElementById("emailField").value, "5B0B15ANGRY")
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(errorMessage)
        // ..
      });
});