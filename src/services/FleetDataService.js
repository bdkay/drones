import { Car } from '../classes/Car.js';
import { Drone } from '../classes/Drone.js';

export class FleetDataService {
  constructor(){
    this.cars = [];
    this.drones = [];
  }
  loadData(fleet){
    for (let data of fleet){
      switch(data.type){
        case 'car':
          let car = this.loadCar(data);
          this.cars.push(data);
          break;
        case 'drone':
          this.drones.push(data);
          break;
      }
    }
  }
  
  loadCar(car){
    let c = new Car(car.license, car.model, car.latLong);
    c.miles = car.miles;
    c.make = car.make;
    return c;
  }
}