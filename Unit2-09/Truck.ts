/**
 * This is the truck class.
 *
 * By: Ava Venturino
 * Version: 1.0
 * Since:   2022-04-10
 */

import Vehicle from './Vehicle.ts'

class Truck extends Vehicle {
  private liscencePlate: string

  constructor (color = 'unknown', maxSpeed = 0, speed = 0, liscencePlate = 'unknown', tireNum = 0) {
    super(maxSpeed, speed)
    this.liscencePlate = liscencePlate
    this.color = color
    this.tireNum = tireNum
  }
  
  brake (breakPower: number, breakTime: number, airPressure: number) {
    this.speed = this.speed - (breakPower * breakTime) - (airPressure * breakTime)
    if (this.speed < 0) {
      this.speed = 0
    }
  }

  // liscence plate
  plateStatus (): void {
    console.log(`-> Liscence plate: ${this.liscencePlate}`)
  }

  // air status
  applyAirStatus (): void {
    console.log(`New Speed: ${this.speed}`)
  }
  
  // set tires
  setTires (tireNum: number): void {
    this.tireNum = tireNum
  }
}

export default Truck