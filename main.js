var firebaseConfig = {
    apiKey: "AIzaSyBHduHnN7ZmSkKRNMuF75kRajlLG1mXFOc",
    authDomain: "eeeee-d6a08.firebaseapp.com",
    databaseURL: "https://eeeee-d6a08-default-rtdb.firebaseio.com",
    projectId: "eeeee-d6a08",
    storageBucket: "eeeee-d6a08.appspot.com",
    messagingSenderId: "486756527416",
    appId: "1:486756527416:web:c650947543d3d36c68a5cd",
    measurementId: "G-DFPVP1MWH1"
  }
  firebase.initializeApp(firebaseConfig);

  
  function addUser(){
      user_name=document.getElementById("user_name").value;
      firebase.database().ref("/").child(user_name).update({
          purpose:"adding user"
      })
  }