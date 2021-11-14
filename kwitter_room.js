
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
      apiKey: "AIzaSyDKK0UpHPF72kyMnVU1K8G4YJy2iSH9VuY",
      authDomain: "kwitter-66dd3.firebaseapp.com",
      databaseURL: "https://kwitter-66dd3-default-rtdb.firebaseio.com",
      projectId: "kwitter-66dd3",
      storageBucket: "kwitter-66dd3.appspot.com",
      messagingSenderId: "931428973050",
      appId: "1:931428973050:web:723b6970e53170dd9d8c43",
      measurementId: "G-8K9DKQG2GD"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
