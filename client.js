

var ws = new WebSocket("ws://localhost:3000/");

//ws.onopen = function() {};
    
function sendColor()
{
    var color = document.getElementById("color_name").value;
    ws.send(color);
}

ws.onmessage = function (evt) { 
    var received_msg = evt.data;
    alert(received_msg);
};
