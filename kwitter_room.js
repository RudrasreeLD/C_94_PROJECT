
const firebaseConfig = {
      apiKey: "AIzaSyAbbpFlz-X4VlZSCzTB-LO71bK8_IEdL_s",
      authDomain: "kwitter-e0eeb.firebaseapp.com",
      projectId: "kwitter-e0eeb",
      storageBucket: "kwitter-e0eeb.appspot.com",
      messagingSenderId: "653236461974",
      appId: "1:653236461974:web:fe00999b77c1a336bd7db7",
      measurementId: "G-D3VZN9V1CN"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
