var canvas = document.getElementById("canvas");
var processing = new Processing(canvas, function(processing) {
    processing.size(400, 400);
    processing.background(0xFFF);

    var mouseIsPressed = false;
    processing.mousePressed = function () { mouseIsPressed = true; };
    processing.mouseReleased = function () { mouseIsPressed = false; };

    var keyIsPressed = false;
    processing.keyPressed = function () { keyIsPressed = true; };
    processing.keyReleased = function () { keyIsPressed = false; };

    function getImage(s) {
        var url = "https://www.kasandbox.org/programming-images/" + s + ".png";
        processing.externals.sketch.imageCache.add(url);
        return processing.loadImage(url);
    }

    function getLocalImage(url) {
        processing.externals.sketch.imageCache.add(url);
        return processing.loadImage(url);
    }

    // use degrees rather than radians in rotate function
    var rotateFn = processing.rotate;
    processing.rotate = function (angle) {
        rotateFn(processing.radians(angle));
    };

    with (processing) {
      noStroke();
var Button = function(Config) {
    this.x = Config.x || 0;
    this.y = Config.y || 0;
    this.Width = Config.Width || 150;
    this.Height = Config.Height || 50;
    this.Draw = Config.Draw || function() {
        fill(25, 105, 0);
        rect(this.x, this.y, this.Width, this.Height, 5);
    };
};
Button.prototype.BntDraw = function() {
    this.Draw();
};
Button.prototype.IsMouseInside = function() {
    return  mouseX > this.x &&
            mouseX < (this.x + this.Width) &&
            mouseY > this.y &&
            mouseY < (this.y + this.Height);
};
var play = false;
var buttons = {
    Buttons : [
        new Button({
            x :  0,
            y : 380,
            Width  : 60,
            Height : 20, 
            Draw : function() {
                if(this.IsMouseInside())
                {
                    fill(0, 0, 0, 125);
                    if(mouseIsPressed)
                    {
                         fill(0, 0, 0 , 155);
                    }
                }else{
                fill(0, 0, 0, 100);
                }
                rect(this.x, this.y, this.Width, this.Height);
                fill(0, 0, 0);
    text("Back",this.x - 15 + this.Width / 2 ,this.y + 4 + this.Height / 2);
            },
        }),
        new Button({
            x : 340,
            y : 380,
            Width  : 60,
            Height : 20, 
            Draw : function() {
                if(this.IsMouseInside())
                {
                    fill(0, 0, 0, 125);
                    if(mouseIsPressed)
                    {
                         fill(0, 0, 0 , 155);
                    }
                }else{
                fill(0, 0, 0, 100);
                }
                rect(this.x, this.y, this.Width, this.Height);
                fill(0, 0, 0);
    text("Next",this.x - 15 + this.Width / 2 ,this.y + 4 + this.Height / 2);
            },
        }),
        new Button({
            x : 170,
            y : 380,
            Width  : 60,
            Height : 20, 
            Draw : function() {
                if(this.IsMouseInside())
                {
                    fill(0, 0, 0, 125);
                    if(mouseIsPressed)
                    {
                         fill(0, 0, 0 , 155);
                    }
                }else{
                fill(0, 0, 0, 100);
                }
                rect(this.x, this.y, this.Width, this.Height);
                fill(0, 0, 0);
                 if(play === false)
                 {
    text("Play",this.x - 15 + this.Width / 2 ,this.y + 4 + this.Height / 2);
                 }else
                 if(play === true)
                 {
    text("Stop",this.x - 15 + this.Width / 2 ,this.y + 4 + this.Height / 2);               
                 }
            },
        }),
    
        new Button({
            x : 200,
            y : 0,
            Width  : 20,
            Height : 20, 
            Draw : function() {
                if(this.IsMouseInside())
                {
                    fill(0, 0, 0, 125);
                    if(mouseIsPressed)
                    {
                         fill(0, 0, 0 , 155);
                    }
                }else{
                fill(0, 0, 0, 100);
                }
                rect(this.x, this.y, this.Width, this.Height);
                fill(0, 0, 0);
    text("+",this.x - 5 + this.Width / 2 ,this.y + 4 + this.Height / 2);
            },
        }),
        new Button({
            x : 220,
            y : 0,
            Width  : 20,
            Height : 20, 
            Draw : function() {
                if(this.IsMouseInside())
                {
                    fill(0, 0, 0, 125);
                    if(mouseIsPressed)
                    {
                         fill(0, 0, 0 , 155);
                    }
                }else{
                fill(0, 0, 0, 100);
                }
                rect(this.x, this.y, this.Width, this.Height);
                fill(0, 0, 0);
    text("-",this.x - 5 + this.Width / 2 ,this.y + 4 + this.Height / 2);
            },
        }),
        new Button({
            x : 325,
            y : 0,
            Width  : 75,
            Height : 20, 
            Draw : function() {
                if(this.IsMouseInside())
                {
                    fill(0, 0, 0, 125);
                    if(mouseIsPressed)
                    {
                         fill(0, 0, 0 , 155);
                    }
                }else{
                fill(0, 0, 0, 100);
                }
                rect(this.x, this.y, this.Width, this.Height);
                fill(0, 0, 0);
    text("FirstFrame",this.x - 32.5 + this.Width / 2 ,this.y + 4 + this.Height / 2);
            },
        }),
        
        new Button({
            x : 240,
            y : 0,
            Width  : 50,
            Height : 20, 
            Draw : function() {
                if(this.IsMouseInside())
                {
                    fill(0, 0, 0, 125);
                    if(mouseIsPressed)
                    {
                         fill(0, 0, 0 , 155);
                    }
                }else{
                fill(0, 0, 0, 100);
                }
                rect(this.x, this.y, this.Width, this.Height);
                fill(0, 0, 0);
    text("colors",this.x - 20 + this.Width / 2 ,this.y + 4 + this.Height / 2);
            },
        }),
        new Button({
            x : 200,
            y : 20,
            Width  : 20,
            Height : 20, 
            Draw : function() {
                if(this.IsMouseInside())
                {
                    fill(0, 0, 0, 125);
                    if(mouseIsPressed)
                    {
                         fill(0, 0, 0 , 155);
                    }
                }else{
                fill(0, 0, 0, 100);
                }
                rect(this.x, this.y, this.Width, this.Height);
                fill(0, 0, 0);
    text("+",this.x - 5 + this.Width / 2 ,this.y + 4 + this.Height / 2);
            },
        }),
        new Button({
            x : 220,
            y : 20,
            Width  : 20,
            Height : 20, 
            Draw : function() {
                if(this.IsMouseInside())
                {
                    fill(0, 0, 0, 125);
                    if(mouseIsPressed)
                    {
                         fill(0, 0, 0 , 155);
                    }
                }else{
                fill(0, 0, 0, 100);
                }
                rect(this.x, this.y, this.Width, this.Height);
                fill(0, 0, 0);
    text("-",this.x - 5 + this.Width / 2 ,this.y + 4 + this.Height / 2);
            },
        }),
        new Button({
            x : 325,
            y : 20,
            Width  : 75,
            Height : 20, 
            Draw : function() {
                if(this.IsMouseInside())
                {
                    fill(0, 0, 0, 125);
                    if(mouseIsPressed)
                    {
                         fill(0, 0, 0 , 155);
                    }
                }else{
                fill(0, 0, 0, 100);
                }
                rect(this.x, this.y, this.Width, this.Height);
                fill(0, 0, 0);
    text("LastFrame",this.x - 30 + this.Width / 2 ,this.y + 4 + this.Height / 2);
            },
        }),
        new Button({
            x : 242.5,
            y : 380,
            Width  : 85,
            Height : 20, 
            Draw : function() {
                if(this.IsMouseInside())
                {
                    fill(0, 0, 0, 125);
                    if(mouseIsPressed)
                    {
                         fill(0, 0, 0 , 155);
                    }
                }else{
                fill(0, 0, 0, 100);
                }
                rect(this.x, this.y, this.Width, this.Height);
                fill(0, 0, 0);
    text("DeleteFrame",this.x - 40 + this.Width / 2 ,this.y + 4 + this.Height / 2);
            },
        }),
    ],
    Draw : function() {
       for(var i = 0; i < this.Buttons.length; i++)
       {
           this.Buttons[i].Draw();
       }
    },
};

var penColor = color(20,40,50);
var penSize = 7;
var xpos = [];
var ypos = [];
var pxpos = [];
var pypos = [];
var PenSize = [];
var PenColor = [];

var startDrawRoom = 45;
var endDrawRoom = 370;
var Frame = 0;
var usedFrames = 0;
var fps = 5;
var showColors = false;
///var penColor = color(0,0,0);

xpos.push([0]);
ypos.push([0]);
pxpos.push([0]);
pypos.push([0]);
PenSize.push([0]);
PenColor.push([0]);

draw = function() {

    background(255,255,255);
    
    if(play === false)
    {
        textSize(15);
        fill(0, 0, 0 ,75);
        rect( 0, 0, 400, 40);
        rect(0,370,400,30);
        fill(0, 0, 0);
        text("Frame : " + Frame, 5, 15);
        text("UsedFrames : " + usedFrames, 5, 35);
        text("FrameRate : " + fps, 100, 15);
        text("PenSize : " + penSize, 120, 35);
        buttons.Draw();
    }
    if(play === true)
    {
    buttons.Buttons[2].Draw();
    }
    
    if(mouseIsPressed)
    {
       if(mouseY > startDrawRoom && mouseY < endDrawRoom && 
                     showColors === false && play === false)
        {
            xpos[Frame].push(mouseX);
            ypos[Frame].push(mouseY);
            pxpos[Frame].push(pmouseX);
            pypos[Frame].push(pmouseY);
        }
        
        if(buttons.Buttons[5].IsMouseInside())
        {
            Frame = 0;
        }
    }
    
    for(var i = 0; i < xpos[Frame].length; i++)
    {
        strokeWeight(PenSize[Frame][i]);
       // stroke(PenColor[Frame][i]);
       stroke(penColor);
        line(xpos[Frame][i], ypos[Frame][i], pxpos[Frame][i], pypos[Frame][i]);
    }
    strokeWeight(1);
    if(showColors === true)
    { 
       
        stroke(0,0,0);
        fill(0, 0, 0 , 100);
        rect(225,25,150,90);
        strokeWeight(2);
        var shhot = 4;
        var port = 35;
        for(var x = 0; x < 255; x += shhot)
        {
            for(var y = 0; y < 255; y += shhot)
            {
                stroke(x, y, port);
                point(225 + x / shhot,25 + y / shhot);
                //if(mouseIsPressed)
                {
               // penColor = color(mouseX,mouseY, 35);
                 PenColor.push(color(mouseX,mouseY, 35));
                }
            }
        }
    }
    noStroke();
    
    if(play === true)
    {
        frameRate(fps);
        if(Frame < usedFrames)
        {
            Frame++;
        }else{
            play = false;
        }
    }else if(play === false)
    {
        frameRate(60);
    }
    
    if(fps > 100)
    {
       fps = 1;   
    }
    if(fps < 1)
    {
       fps = 100;   
    }
    if(penSize > 15)
    {
        penSize = 1;
    }else
    if(penSize < 1)
    {
        penSize = 15;
    }
    
};

var lastMousePressed = mousePressed;
mousePressed = function()
{
    lastMousePressed();
    if(buttons.Buttons[0].IsMouseInside() && Frame >= 1)
    {
        Frame -= 1;
    }
    if(buttons.Buttons[1].IsMouseInside())
    {
        Frame += 1;
        if(Frame > usedFrames)
        {
        usedFrames += 1;
        }
        xpos.push([0]);
        ypos.push([0]);
        pxpos.push([0]);
        pypos.push([0]);
        PenSize.push([0]);
        PenColor.push([0]);
    }
    
    if(buttons.Buttons[2].IsMouseInside())
    {
        if(play === false)
        { 
            play = true;
        }else
        if(play === true)
        { 
            play = false;
        }
    }
    if(buttons.Buttons[3].IsMouseInside() && fps >= 1)
    {
        fps += 1;
    }
    if(buttons.Buttons[4].IsMouseInside())
    {
        fps -= 1;
    }
    
    if(buttons.Buttons[6].IsMouseInside())
    {
       if(showColors === false)
       { 
       showColors = true;
       }else
       if(showColors === true)
       { 
       showColors = false;
       }
    }
    if(buttons.Buttons[7].IsMouseInside())
    {
        penSize += 1;
        PenSize[Frame].push(penSize);
    }
    if(buttons.Buttons[8].IsMouseInside() && penSize >= 1)
    {
        penSize -= 1;
        PenSize[Frame].push(penSize);
    }
    if(buttons.Buttons[9].IsMouseInside())
    {
        Frame = usedFrames;
    }
    if(buttons.Buttons[10].IsMouseInside())
    {
        xpos[Frame] = [Frame + 1];
        ypos[Frame] = [Frame + 1];
        pxpos[Frame] = [Frame + 1];
        pypos[Frame] = [Frame + 1];
        if(Frame > 0)
        {
            Frame -= 1;
            usedFrames -= 1;
        }
    }
    
};

    }
    if (typeof draw !== 'undefined') processing.draw = draw;
});