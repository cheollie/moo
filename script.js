function sendMessage() {
  var request = new XMLHttpRequest();
  request.open("POST", document.getElementById("token").value);

  request.setRequestHeader('Content-type', 'application/json');

  var params = {
    username: document.getElementById("uname").value,
    avatar_url: document.getElementById("pfp").value,
    content: document.getElementById("content").value
  }

  request.send(JSON.stringify(params));
  //alert("sent!");
}