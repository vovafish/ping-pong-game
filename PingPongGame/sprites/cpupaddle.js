function CPUPaddle() {
    /*
     Creating basic variable for the CPU Paddle class
     */
        x = 0, //x coordinate for the ball
        y = 0, //y coordiante for the ball
        vx = 0, // velocity of CPU Paddle (right and left)
        width = canvas.width, //width of the canvas
        heigth = canvas.height, //height of the canvas
        widthPaddle = 100, 
        heightPaddle = 10,
        color = "blue";

    //create a public property called Top
    Object.defineProperty(this, 'Top',
        {
            //getter
            get: function () {
                //return the y posn less the height
                return y - 10;
            }
        }
    )

    //create a public property called Bottom
    Object.defineProperty(this, 'Bottom',
        {
            //getter
            get: function () {
                //return the y posn plus the height
                return y + 10;
            }
        }
    )

    //create a public property called Left
    Object.defineProperty(this, 'Left',
        {
            //getter
            get: function () {
                //return the x posn less the width
                return x - 60;
            }
        }
    )

    //create a public property called Right
    Object.defineProperty(this, 'Right',
        {
            //getter
            get: function () {
                //return the x posn plus the width
                return x + 60;
            }
        }
    )

    //public property for X
    Object.defineProperty(this, 'VX',
        {
            get: function () {
                return vx;
            },
            set: function (value) {
                vx = value;
            }
        }
    )

    //make privete x variable available in the Default.html
    Object.defineProperty(this, 'X',
        {
            get: function () {
                return x;
            },
            set: function (value) {
                x = value;
            }
        }
    )
    //public property for Y
    Object.defineProperty(this, 'Y',
        {
            get: function () {
                return y;
            },
            set: function (value) {
                y = value;
            }
        }
    )

    CPUPaddle.prototype.drawCPU = function (context) {
        //save the state of the drawing context before we change it
        context.save();
        //set the coordinates of the drawing area of the new shape to x and y
        context.translate(x, y);
        //start the line (path)
        context.beginPath();
        context.fillStyle = color;
        context.moveTo(-50, -5);
        context.lineTo(50, -5);
        context.lineTo(50, 5);
        context.lineTo(-50, 5);
        context.stroke();
        //close the path
        context.closePath();
        context.fill();
        //restore the state of the context to what it was before our drawing
        context.restore();
    }
}