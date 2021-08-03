var firebaseConfig = {
    apiKey: "AIzaSyDJQtF9rPVnwNBvXdZLvAykpg3YPx63y44",
    authDomain: "practice1-9052f.firebaseapp.com",
    databaseURL: "https://practice1-9052f-default-rtdb.firebaseio.com",
    projectId: "practice1-9052f",
    storageBucket: "practice1-9052f.appspot.com",
    messagingSenderId: "316425660801",
    appId: "1:316425660801:web:a86d33143156f5f0ada080"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


function addUser(){
 user_name=document.getElementById("user_name").value;
 firebase.database().ref("/").child(user_name).update({
     purpose:"adding user"
 });
}