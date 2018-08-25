class Drone {
  constructor(id, name){
    this.id = id;
    this.name = name;
  }
};

let drone = new Drone('a123', 'tom');

console.log(`drone: ${drone['id']} drone name: ${drone['name']}`);