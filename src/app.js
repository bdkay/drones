import { Car } from './classes/Car.js';
import { Drone } from './classes/Drone.js';
import { fleet } from './FleetData.js';
import { FleetDataService } from './services/FleetDataService.js';

let dataService = new FleetDataService();
dataService.loadData(fleet);

for (let car of dataService.cars){
  console.log(car.license);
}