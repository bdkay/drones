import { Car } from './classes/Car.js';
import { Drone } from './classes/Drone.js';
import { fleet } from './FleetData.js';
import { FleetDataService } from './services/FleetDataService.js';

let dataService = new FleetDataService();
dataService.loadData(fleet);

// let car = dataService.getCarByLicense('AT9900');
let cars = dataService.getCarsSortedByLicense();
for (let license of cars){
  console.log(license);
}
console.log(cars);