import { Component, OnInit } from '@angular/core';
import { Vehicle } from '../vehicle';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent implements OnInit {

  vehicles: Vehicle[] = [];
  centeredVehicle: string;

  constructor(private vehicleService: VehicleService) { }

  ngOnInit() {
    this.vehicleService.subscription.subscribe(updatedVehicle => {
      
      if (updatedVehicle==null) return;
      let foundIndex = this.vehicles.findIndex(existingVehicle => existingVehicle.name == updatedVehicle.name);
      if (foundIndex == -1)
      {
        //Populating vehicle lat long array for history of all the moving lat long...
        updatedVehicle.latLngHistory.push([updatedVehicle.lat,updatedVehicle.lng]);
        
        this.vehicles.push(updatedVehicle);
        this.vehicles.sort( (a:Vehicle,b:Vehicle) => {
          return (a.name < b.name) ? -1 : 1;
        });
      }
      else
      {
        this.vehicles[foundIndex].latLngHistory.push([updatedVehicle.lat,updatedVehicle.lng])
        //Assigning/updating latest array with all the lat long history info
        updatedVehicle.latLngHistory = this.vehicles[foundIndex].latLngHistory;
        
        /*
        //This block is for testing that whether array is being popluated or not.. 
        if(updatedVehicle.name == "Dronfield Round"){
            console.log("GODDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD ARRAAYYYYYYY")
          console.log(updatedVehicle)}
        }
        */
        this.vehicles[foundIndex] = updatedVehicle;
      }
    });
  }




  centerVehicle(vehicle: Vehicle) {
    // allow to "deselect"
    if (this.centeredVehicle == vehicle.name)
    {
      this.centeredVehicle = null
      this.vehicleService.updateCenterVehicle(null);
    }
    else
    {
      this.centeredVehicle = vehicle.name;
      this.vehicleService.updateCenterVehicle(vehicle);
    }
  }

}
