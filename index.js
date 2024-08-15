var Circle = /** @class */ (function () {
    function Circle(radius, color) {
        this.radius = 1.0;
        this.color = "red";
        if (radius !== undefined)
            this.radius = radius;
        if (color !== undefined)
            this.color = color;
    }
    // Getter and Setter for radius
    Circle.prototype.getRadius = function () {
        return this.radius;
    };
    Circle.prototype.setRadius = function (radius) {
        this.radius = radius;
    };
    // Getter and Setter for color
    Circle.prototype.getColor = function () {
        return this.color;
    };
    Circle.prototype.setColor = function (color) {
        this.color = color;
    };
    // toString method
    Circle.prototype.toString = function () {
        return "Circle[radius=".concat(this.radius, ",color=").concat(this.color, "]");
    };
    // Method to calculate the area of the circle
    Circle.prototype.getArea = function () {
        return Math.PI * this.radius * this.radius;
    };
    // Method to calculate the circumference of the circle
    Circle.prototype.getCircumference = function () {
        return 2 * Math.PI * this.radius;
    };
    return Circle;
}());
// Example usage:
var circle1 = new Circle();
var circle2 = new Circle(2.5);
var circle3 = new Circle(2.5, "blue");
console.log(circle1.toString()); // Circle[radius=1,color=red]
console.log(circle2.getArea()); // 19.634954084936208
console.log(circle3.getCircumference()); // 15.707963267948966
