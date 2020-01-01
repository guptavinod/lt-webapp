export class Vehicle {
  name: string;
  lat: number;
  lng: number;
  dateAndTime: string;
  speed: number;
  //need to maintain lat long history of this Vehicle object
  latLngHistory = [];

  constructor(name: string, lat:number, lng:number, dateAndTime:string, speed: number) {
    this.name = name;
    this.lat = lat;
    this.lng = lng;
    this.dateAndTime = dateAndTime;
    this.speed = speed;
  }

}
