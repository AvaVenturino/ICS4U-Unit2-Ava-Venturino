/*
 * Class that defines string stack.
 *
 * @author  Ava Venturino
 * @version 1.0
 * @since   2024-01-01
 */
export default class Vehicle {

  constructor(color, licencePlate, numberOfDoors, maxSpeed) {
    this.color = color
    this.licencePlate = licencePlate
    this.numberOfDoors = numberOfDoors
    this.maxSpeed = maxSpeed
    this._speed = 0
  }

  // get colour
  get color() {
    return this.color
  }

  // get current speed
  get licencePlate() {
    return this.licencePlate
  }

  // get current speed
  get speed() {
    return this._speed
  }

  // set colour
  set color(color) {
    this.color = color
  }

  // set current speed
  set licencePlate(licencePlate) {
    this.licencePlate = licencePlate
  }

  // checks if stack is empty
  status() {
    console.log(" -> Speed: " + this._speed)
    console.log(" -> Max Speed: " + this.maxSpeed)
    console.log(" -> Number Of Doors: " + this.numberOfDoors)
    console.log(" -> Licence Plate: " + this.licencePlate)
    console.log(" -> Color: " + this.color)
  }

  // change speed via accelerating formula
  accelerate (accelerationPower, accelerationTime) {
    this._speed = (accelerationPower * accelerationTime) + this._speed
    if (this._speed > this.maxSpeed) {
      this._speed = this.maxSpeed
    }
  }

  // change speed via braking formula
  break (breakPower, breakTime) {
    this._speed = this._speed - (breakPower * breakTime)
    if (this._speed < 0) {
      this._speed = 0
    }
  }
}
