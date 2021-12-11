function Accelerate(Gravity) {

    //variable to store ax and ay
    var ax = 0;


    //public read only property for AX
    Object.defineProperty(this, 'AX',
        {
            get: function () {
                return ax;
            }
        })

    //public method for horizontal thrust
    Accelerate.prototype.HThrust = function (Thrust) {
        ax -= Thrust;
    }
}
