/**
 * The Location Object Definition
 */

class Location {
  constructor({ name='', lat=0.0, long=0.0 } = { }) {
    this.name = name;
    this.lat = lat;
    this.long = long;
  }

  print() {
    return `${this.name} is located at lat ${this.lat} and long ${this.long}`;
  }
}

export default Location;