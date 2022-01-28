function Ball() {
    /*
     Creating all the basic variable for the ball class
     */

    var x = 0,
        y = 0,
        color = "red",
        random =
        width = canvas.width,
        height = canvas.height;
        //size
        size = 20,
        //x velocity
        vx = 3.5,
        //y velocity
        vy = 3;
    
    //create a public property called Top
    Object.defineProperty(this, 'Top',
        {
            //getter
            get: function () {
                //return the value of y less height
                return y - 10;
            }
        }
    )

    //create a public property called Bottom
    Object.defineProperty(this, 'Bottom',
        {
            //getter
            get: function () {
                //return the value of y plus height
                return y + 10;
            }
        }
    )

    //create a public property called Left
    Object.defineProperty(this, 'Left',
        {
            //getter
            get: function () {
                //return the value of x less width
                return x - 10;
            }
        }
    )

    //create a public property called Right
    Object.defineProperty(this, 'Right',
        {
            //getter
            get: function () {
                //return the value of x plus width
                return x + 10;
            }
        }
    )

    //make privete vx variable available for the Default.html
    Object.defineProperty(this, 'Width',
        {
            get: function () {
                return width;
            },
            set: function (value) {
                width = value;
            }
        }
    )

    //make privete height variable available for the Default.html
    Object.defineProperty(this, 'Height',
        {
            get: function () {
                return height;
            },
            set: function (value) {
                height = value;
            }
        }
    )
    //make privete vx variable available in the Default.html
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

    //public property for VY
    Object.defineProperty(this, 'VY',
        {
            get: function () {
                return vy;
            },
            set: function (value) {
                vy = value;
            }
        }
    )

    //public property for size
    Object.defineProperty(this, 'Size',
        {
            get: function () {
                return size;
            },
            set: function (value) {
                size = value;
            }
        }
    )

    //public property for X
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
    //function public draw method
    Ball.prototype.draw = function (context) {
        //save the context
        context.save();
        //set x and y
        context.translate(x, y);
        //set the line width
        context.lineWidth = 2;
        //set the colour of the fill
        context.fillStyle = color;
        //begin the path
        context.beginPath();
        //draw the ball
        context.arc(0, 0, 10, 0, (2 * Math.PI));
        //close the path
        context.closePath();
        //fill the shape
        context.fill();
        //draw it
        context.stroke();
        //restore the context
        context.restore();

    }
    // ball reflect by left & right side
    Ball.prototype.drawSqueezedHorizontally = function (context) {
        //save the context
        context.save();
        //set x and y
        context.translate(x, y);
        //set the line width
        context.lineWidth = 2;
        //set the colour of the fill
        context.fillStyle = color;
        //begin the path
        context.beginPath();
        //draw the box

        context.ellipse(0, 0, 10, 15, 0, 0, 2 * Math.PI);
        
        //close the path
        context.closePath();
        //fill the shape
        context.fill();
        //draw it
        context.stroke();
        //restore the context
        context.restore();

    }
    
    // ball reflect by top & bottom side
    Ball.prototype.drawSqueezedVertically = function (context) {
        //save the context
        context.save();
        //set x and y
        context.translate(x, y);
        //set the line width
        context.lineWidth = 2;
        //set the colour of the fill
        context.fillStyle = color;
        //begin the path
        context.beginPath();
        //draw the box
        context.ellipse(0, 0, 15, 10, 0, 0, 2 * Math.PI);
        //close the path
        context.closePath();
        //fill the shape
        context.fill();
        //draw it
        context.stroke();
        //restore the context
        context.restore();
    }  
}