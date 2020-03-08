import * as firebase from 'firebase';
import 'firebase/auth';

const firebaseConfig = {
  
  };

  firebase.initializeApp(firebaseConfig);

  export default {
      auth: firebase.auth(),
      login() {
          const provider = new firebase.auth.GoogleAuthProvider();
          firebase.auth().signInWithPopup(provider).then(function(result){
            console.log(result);
          })
          .catch(function(error){
              const errorCode = error.code;
              const errorMessage = error.message;
              const email = error.email;
              const credential = error.credential;
              console.log(errorCode, errorMessage, email, credential);
          })

          },
          logout() {
              firebase.auth().signOut()
              .then(function() {})
              .catch(function(error) {
                  console.log(error)
              });
          }
      }
  