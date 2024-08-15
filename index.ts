class Circle {
    private radius: number = 1.0;
    private color: string = "red";

    // Constructors
    constructor();
    constructor(radius: number);
    constructor(radius: number, color: string);
    constructor(radius?: number, color?: string) {
        if (radius !== undefined) this.radius = radius;
        if (color !== undefined) this.color = color;
    }

    // Getter and Setter for radius
    getRadius(): number {
        return this.radius;
    }

    setRadius(radius: number): void {
        this.radius = radius;
    }

    // Getter and Setter for color
    getColor(): string {
        return this.color;
    }

    setColor(color: string): void {
        this.color = color;
    }

    // toString method
    toString(): string {
        return `Circle[radius=${this.radius},color=${this.color}]`;
    }

    // Method to calculate the area of the circle
    getArea(): number {
        return Math.PI * this.radius * this.radius;
    }

    // Method to calculate the circumference of the circle
    getCircumference(): number {
        return 2 * Math.PI * this.radius;
    }
}

// Example usage:
const circle1 = new Circle();
const circle2 = new Circle(2.5);
const circle3 = new Circle(2.5, "blue");

console.log(circle1.toString()); // Circle[radius=1,color=red]
console.log(circle2.getArea());  // 19.634954084936208
console.log(circle3.getCircumference()); // 15.707963267948966
