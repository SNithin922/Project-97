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

  room_name = localStorage.getItem("room_name");
  user_name = localStorage.getItem("user_name");
  msg = document.getElementById("input_message").value;
  
  function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
      firebase_message_id = childKey;
      message_data = childData;
  //Start code
  console.log(firebase_message_id);
  console.log(message_data);
  name = message_data['name'];
  message = message_data['message'];
  like = message_data['like'];
  name_with_tag = "<h4>" + name + "<img class='user_tick' src='tick.jpg'></h4>" ;
  message_with_tag = "<h4 class='message_h4'>" +message +  "</h4>";
  like_button = "<button class='btn btn-warning' id=" + firebase_message_id + "value=" + like + "onclick='updateLike(this.id)'>";
  span_with_tag = "<span class= 'glyphicon glyphicon-thumbs-up'>like :"+ like + "</span></button><hr>";

  row = name_with_tag + message_with_tag + like_button + span_with_tag;
  document.getElementById("output").innerHTML += row;
  //end code
} });  }); }
  getData();
  msg = document.getElementById("input_message").value;
  function send()
  {
      firebase.database().ref(room_name).push({
     name : user_name,
     message : msg,
     like : 0
      });
  }
  function updateLike(message_id)
  {
      console.log("clicked on like button -" + message_id);
      button_id= message_id;
      likes = document.getElementById(button_id).value;
      update_likes = Number(likes) + 1;
      console.log(update_likes);

      firebase.database().ref(room_name).child(message_id).update({
          like : update_likes
      })
  }