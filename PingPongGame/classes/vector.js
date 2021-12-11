//this class allows you to set a vector passing direction in degrees and magnitude in pixels
//it has two public properties VX and VY which give us the calculated velocities for x

//constructor
function Vector(Degrees, Magnitude) {

    //private member variables for vx and vy
    var vx = CalcVX(Degrees, Magnitude);

    //public read only property for VX
    Object.defineProperty(this, 'VX',
        {
            get: function () {
                return vx;
            }
        })

    function CalcVX(Degrees, Magnitude) {
        //convert degrees to radians
        var radians = Degrees * Math.PI / 180;
        //calculate the vx value
        return Math.cos(radians) * Magnitude;
    }
}
