 var config = {
  apiKey: "AIzaSyATymnNHhamMAjQ5cbOcQSPFWrEN34HfIQ",
  authDomain: "clickcount-1171e.firebaseapp.com",
  databaseURL: "https://clickcount-1171e.firebaseio.com",
  storageBucket: "clickcount-1171e.appspot.com",
  };  

  firebase.initializeApp(config);

  var count = 100;

  firebase.database().ref().on("value",function(snapshot) {
      count = snapshot.val().clicks;
      console.log(snapshot.val());
      $('#clickValue').html(count);
      // Need to say snapshot.val to get what you want returned
  });

  $('#clickButton').on("click",function(){
      count--;
      firebase.database().ref().set({
          clicks:count
    });

  })

  $('#restartButton').on("click",function(){
      firebase.database().ref().set({
          clicks:100
      });
  })


 