"use strict";
exports.__esModule = true;
exports.Position = void 0;
var Position = /** @class */ (function () {
    function Position(PositionName) {
        this.PositionID = ++Position.counter;
        this.PositionName = PositionName;
    }
    Position.prototype.getPositionName = function () {
        return this.PositionName;
    };
    Position.prototype.setPositionName = function (value) {
        this.PositionName = value;
    };
    Position.prototype.printInfoPosition = function () {
        console.log("ID: " + this.PositionID);
        console.log("Name: " + this.PositionName);
    };
    Position.counter = 0;
    return Position;
}());
exports.Position = Position;
