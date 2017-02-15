var ball = {
    radius: 0,
    centerX: 0,
    centerY: 0
};

var joystick;                       // joystick
var context;

function init(){
    ball.centerX = 150;
    ball.centerY = 150;
    ball.radius = 25;

    var canvas = document.getElementById('canvas');
    context = canvas.getContext('2d');

    canvas.addEventListener('mousemove', onMouseMove);
    canvas.addEventListener('mousedown', onMouseDown);
    canvas.addEventListener('mouseup', onMouseUp);
    canvas.addEventListener('touchmove', onMouseMove);
    canvas.addEventListener('touchstart', onMouseDown);
    canvas.addEventListener('touchend', onMouseUp);

    joystick = Joystick(ball);      // joystick (create)

    setInterval(function(){
        draw();
        joystick.draw(context);     // joystick (draw)
    },10);
}

function onMouseMove(event){
    joystick.move(event.clientX, event.clientY);           // joystick (move)
}

function onMouseDown(event){
    joystick.down();                // joystick (down)
}

function onMouseUp(event){
    joystick.up();                  // joystick (up)
}

function draw(){
    context.clearRect(0, 0, window.innerWidth, window.innerHeight);
    context.beginPath();
    context.rect(0, 0, window.innerWidth, window.innerHeight);
    context.fillStyle = 'gray';
    context.fill();

    context.beginPath();
    context.arc(ball.centerX, ball.centerY, ball.radius, 0, 2 * Math.PI, false);
    context.fillStyle = 'green';
    context.fill();
    context.lineWidth = 1;
    context.strokeStyle = '#003300';
    context.stroke();
}

window.addEventListener("load", init, false);