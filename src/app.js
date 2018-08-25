class Drone {
  constructor(id, name){
    this.id = id;
    this.name = name;
  }
};

Drone.maxHeight = 2000;

let drone1 = new Drone('a123', 'tom');
let drone2 = new Drone('b456', 'steve');

console.log(`${drone1.id} ${drone2.id} ${Drone.maxHeight}`);