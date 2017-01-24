
var Joystick = function(tagret){
    var pressed = false;
    var speed = 1;
    var px = 0;
    var py = 0;
    var vx = 0;
    var vy = 0;
    var pointer = {
        x: 0,
        y: 0,
        r: 0
    }

    return {
        move: function(x, y){
            vx = x;
            vy = y;
            if(pressed){
                pointer.x = px + (vx - px);
                pointer.y = py + (vy - py);
                if((vx - px) > pointer.r) pointer.x = px + pointer.r;
                else if((vx - px) < (pointer.r * -1)) pointer.x = px + (pointer.r * -1);
                if((vy - py) > pointer.r) pointer.y = py + pointer.r;
                else if((vy - py) < (pointer.r * -1)) pointer.y = py + (pointer.r * -1);
            }else{
                px = x;
                py = y;
                pointer.x = px;
                pointer.y = py;
                pointer.r = 25;
            }
        },

        down: function(){
            pressed = true;
        },

        up:function(){
            pressed = false;
        },

        draw: function(ctx){
            if(pressed){
                ctx.beginPath();
                ctx.arc(px, py, 50, 0, 2 * Math.PI, false);
                ctx.fillStyle = "rgba(255, 255, 255, 0.4)";
                ctx.fill();

                context.beginPath();
                context.arc(pointer.x, pointer.y, pointer.r, 0, 2 * Math.PI, false);
                context.fillStyle = "rgba(255, 255, 255, 0.6)";
                context.fill();

                if((vx - px) < 0) tagret.centerX = tagret.centerX - speed;
                else if((vx - px) > 0) tagret.centerX = tagret.centerX + speed;
                if((vy - py) < 0) tagret.centerY = tagret.centerY - speed;
                else if((vy - py) > 0) tagret.centerY = tagret.centerY + speed;
            }
        }
    }
}

