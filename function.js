function add(a, b) {
    return console.log(a + b);    
}
var sum = add(1, 2);
sum = add(3.3, 2.5);
sum = add("Hello ", "World");

function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.getName = function() {
        return this.make + " " + this.model + " " + this.year; 
    }
}

var c = new Car("Toyota", "Corolla", 2015);
console.log(c.getName());  
c = new Car("Honda", "Civic", 2016);
console.log(c.getName());
