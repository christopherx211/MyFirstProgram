var MyfirstProgram = /** @class */ (function () {
    function MyfirstProgram() {
        var argArray = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            argArray[_i] = arguments[_i];
        }
        this.printArgs(argArray);
    }
    MyfirstProgram.prototype.printArgs = function (argArray) {
        console.log(argArray);
    };
    MyfirstProgram.prototype.runFirst = function () {
        console.log('this method runs first!...');
    };
    MyfirstProgram.prototype.runLast = function () {
        console.log('this method runs last!');
    };
    return MyfirstProgram;
}());
var newInstance = new MyfirstProgram("a", "b", "c");
