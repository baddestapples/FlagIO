var socket = io();

socket.on('message', function (data) {
  console.log(data);
});

//Initialize player
var player = new Player(socket);

var canvas = document.getElementById('canvas');

var context = canvas.getContext('2d');

var sprite = new Image();
sprite.src = 'static/images/knight.png';

socket.on('players', function (players) {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  context.clearRect(0, 0, canvas.width, canvas.height);

  context.fillStyle = 'green';
  for (var id in players) {
    var player = players[id];
    //context.beginPath();

    context.drawImage(sprite, player.x, player.y);

    //context.arc(player.x, player.y, 10, 0, 2 * Math.PI);
    context.fill();
  }
});