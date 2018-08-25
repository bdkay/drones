class Drone {
  constructor(id, name){
    this.id = id;
    this.name = name;
  }
  fly(){
    console.log(`Drone ${this.id} is flying.`);
  }
};

Drone.maxHeight = 2000;

let drone1 = new Drone('a123', 'tom');
let drone2 = new Drone('b456', 'steve');

drone1.fly();
drone2.fly();