class Drone {
  constructor(id){
    this._id = id;
  }
  get id(){
    return this._id + ' TEMP';
  }
  set(value){
    this._id = value;
  }
}

let drone = new Drone('x3910');

console.log(`drone id: ${drone.id}`);