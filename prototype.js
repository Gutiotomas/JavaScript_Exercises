function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}

// Add a method to the Car prototype
Car.prototype.getName = function() {
    return this.make + " " + this.model + " " + this.year;
}

// Create an instance of Car
var d= new Car("Toyota", "Corolla", 2015);

// Call the method
console.log(d.getName());  