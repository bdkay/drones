class Vehicle {
  start(){
    console.log('starting vehicle');
  }
}

class Car extends Vehicle {
  start(){
    super.start();
    console.log('starting car');
  }
}

let c = new Car();
c.start();