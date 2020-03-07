"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Shape_1 = require("./Shape");
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(myradius, pi) {
        var _this = _super.call(this) || this;
        _this.radius = myradius;
        _this.pi = pi;
        return _this;
    }
    Circle.prototype.area = function () {
        _super.prototype.area.call(this);
        console.log("area of circle is" +
            this.pi * this.radius * this.radius);
    };
    return Circle;
}(Shape_1.Shape));
exports.Circle = Circle;
