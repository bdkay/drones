class Drone {
  constructor(id){
    this._id = id;
  }
  get id(){
    return this._id + ' TEMP';
  }
  set id(value){
    this._id = value;
  }
}

let drone = new Drone('x3910');
drone.id = 'b2111';
console.log(`drone id: ${drone.id}`);