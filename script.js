function sendMessage() {

  var request = new XMLHttpRequest();
  
  var _token = document.getElementById("token").value;
  var _username = document.getElementById("uname").value;
  var _avatarurl = document.getElementById("pfp").value;
  var _content = document.getElementById("content").value;

  var spamMode = document.getElementById("spamMode");

  request.open("POST", _token);
  request.setRequestHeader('Content-type', 'application/json');

  if ( _content.includes("@everyone")==true || _content.includes("@here")==true ){
    _content = _content.replace("@everyone","`@everyone`");
    _content = _content.replace("@here","`@here`");
  }

  var params = {
    username: _username,
    avatar_url: _avatarurl,
    content: _content
  }

  if (_content != "" || _token != "") {
    request.send(JSON.stringify(params));
    if (spamMode.checked == false){
      alert("sent (if ur token url is correct at least-)");
    }
  }
  else { 
    alert("message/token url cannot be empty");
  }

  if (spamMode.checked == false){
    document.getElementById('content').value = '';
  }

}