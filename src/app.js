class Vehicle {
  start(){
    console.log('starting vehicle');
  }
  static getCompanyName() {
    console.log('my company');
  }
}

class Car extends Vehicle {
  start(){
    console.log('starting car');
    super.start();
  }
  static getCompanyName() {
    super.getCompanyName();
    console.log('my other company');
  }
}

let c = new Car();
c.start();
Car.getCompanyName();