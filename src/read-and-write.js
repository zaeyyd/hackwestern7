function writeUserData(username, timestamp, stop_sign, right_turn, left_turn, traffic_light, parking,
    change_lane, yield_sign, speed) {
    firebase.database().ref('users/' + username).set({
      username: username,
      timestamp: timestamp,
      stop_sign: stop_sign,
      right_turn: right_turn,
      left_turn: left_turn,
      traffic_light: traffic_light,
      parking: parking,
      change_lane: change_lane,
      yield_sign: yield_sign,
      speed: speed
    });
}

var userId = firebase.auth().currentUser.uid;
return firebase.database().ref('/users/' + username).once('value').then((snapshot) => {
  var username = (snapshot.val() && snapshot.val().username) || 'Anonymous';
  var timestamp = (snapshot.val() && snapshot.val().timestamp) || 'No Date';
  var stop_sign = (snapshot.val() && snapshot.val().stop_sign) || 'Unknown';
  var right_turn = (snapshot.val() && snapshot.val().right_turn) || 'Unknown';
  var left_turn = (snapshot.val() && snapshot.val().left_turn) || 'Unknown';
  var traffic_light = (snapshot.val() && snapshot.val().traffic_light) || 'Unknown';
  var parking = (snapshot.val() && snapshot.val().parking) || 'Unknown';
  var change_lane = (snapshot.val() && snapshot.val().change_lane) || 'Unknown';
  var yield_sign = (snapshot.val() && snapshot.val().yield_sign) || 'Unknown';
  var speed = (snapshot.val() && snapshot.val().speed) || 'Unknown';
});

function writeNewPost(username, timestamp, stop_sign, right_turn, left_turn, traffic_light, parking,
    change_lane, yield_sign, speed) {
    // A post entry.
    var postData = {
      username: username,
      timestamp: timestamp,
      stop_sign: stop_sign,
      right_turn: right_turn,
      left_turn: left_turn,
      traffic_light: traffic_light,
      parking: parking,
      change_lane: change_lane,
      yield_sign: yield_sign,
      speed: speed
    };
  
    // Get a key for a new Post.
    var newPostKey = firebase.database().ref().child('posts').push().key;
  
    // Write the new post's data simultaneously in the posts list and the user's post list.
    var updates = {};
    updates['/posts/' + newPostKey] = postData;
    updates['/user-posts/' + uid + '/' + newPostKey] = postData;
  
    return firebase.database().ref().update(updates);
  }