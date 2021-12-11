function CPUPaddle() {
        x = 200,
        y = 5,
        width = canvas.width,
        heigth = canvas.height,
        widthPaddle = 100,
        heightPaddle = 10,
        color = "blue";

    //create a public property called Top
    Object.defineProperty(this, 'Top',
        {
            //getter
            get: function () {
                //return the y posn less the height
                return y - 5;
            }
        }
    )

    //create a public property called Bottom
    Object.defineProperty(this, 'Bottom',
        {
            //getter
            get: function () {
                //return the y posn plus the height
                return y + 5;
            }
        }
    )
    //
    //create a public property called Left
    Object.defineProperty(this, 'Left',
        {
            //getter
            get: function () {
                //return the x posn less the width
                return x - 50;
            }
        }
    )
    //
    //create a public property called Right
    Object.defineProperty(this, 'Right',
        {
            //getter
            get: function () {
                //return the x posn plus the width
                return x + 50;
            }
        }
    )




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
        //context.fillRect(width / 2 - widthPaddle / 2, 0, widthPaddle, heightPaddle);
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