/**
 * This is the truck class.
 *
 * By: Ava Venturino
 * version: 1.0
 * Since: 2022-04-10
 */

import Vehicle from './Vehicle.ts'

class Truck extends Vehicle {
  private liscencePlate: string

  constructor (color = 'unknown', maxSpeed = 0, speed = 0, liscencePlate = 'unknown') {
    super(color, maxSpeed, speed)
    this.liscencePlate = liscencePlate
  }

  // air breaks
  applyAir (speed: number, airPressure: number) {
    this.speed = speed - airPressure / 2
    return this.speed
  }

  plateStatus (): void {
    console.log(`-> Liscence plate: ${this.liscencePlate}`)
  }

  applyAirStatus (): void {
    console.log(`New Speed: ${this.speed}`)
  }
}

export default Truck