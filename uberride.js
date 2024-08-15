class UberRide {
    constructor(baseFare, costPerMile, costPerMinute, distance, duration, surgeMultiplier = 1, bookingFee = 0) {
        this.baseFare = baseFare;
        this.costPerMile = costPerMile;
        this.costPerMinute = costPerMinute;
        this.distance = distance; // in miles
        this.duration = duration; // in minutes
        this.surgeMultiplier = surgeMultiplier;
        this.bookingFee = bookingFee;
    }

    // Method to calculate the total fare
    calculateFare() {
        const distanceCost = this.costPerMile * this.distance;
        const timeCost = this.costPerMinute * this.duration;
        const subtotal = this.baseFare + distanceCost + timeCost;
        const surgePricing = subtotal * this.surgeMultiplier;
        const totalFare = surgePricing + this.bookingFee;

        return totalFare;
    }

    // Method to display the fare breakdown
    toString() {
        return `Base Fare: $${this.baseFare.toFixed(2)}, Distance Cost: $${(this.costPerMile * this.distance).toFixed(2)}, Time Cost: $${(this.costPerMinute * this.duration).toFixed(2)}, Surge Multiplier: ${this.surgeMultiplier}, Booking Fee: $${this.bookingFee.toFixed(2)}, Total Fare: $${this.calculateFare().toFixed(2)}`;
    }
}

// Example usage:
const ride = new UberRide(2.50, 1.75, 0.50, 10, 15, 1.5, 2.00);

console.log(ride.toString()); // Outputs the detailed fare breakdown and total fare
