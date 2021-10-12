var firebaseConfig = {
    apiKey: "AIzaSyAd-46mSSa9qkeKym35_2-NDlrkLF0mkCQ",
    authDomain: "diago-4dd5e.firebaseapp.com",
    databaseURL: "https://diago-4dd5e-default-rtdb.firebaseio.com",
    projectId: "diago-4dd5e",
    storageBucket: "diago-4dd5e.appspot.com",
    messagingSenderId: "575626702670",
    appId: "1:575626702670:web:691567f1b7d66e4ff4f81f",
    measurementId: "G-4LV8DZTJSD"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  user_nmae = localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML = "Welcome "+ user_nmae + "!";
  
//ADD YOUR FIREBASE LINKS HERE
function logout()
{
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}
function add_room()
{
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
          purpose : "adding room name"
      });
      localStorage.setItem("room_name",room_name);
      window.location = "diago_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
    console.log(room_name);
    row = "<div class='romm_name' id="+room_name+" onclick='RedirectToRoomName(this.id)'>#"+room_name+"</div> <hr>";
    document.getElementById("output").innerHTML += row;
    //End code
    });});}
getData();
function RedirectToRoomName(name)
{
    console.log(name);
    localStorage.setItem("room_name",name);
}