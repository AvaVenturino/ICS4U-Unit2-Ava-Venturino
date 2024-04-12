/**
 * This is the bike class.
 *
 * By: Ava Venturino
 * version: 1.0
 * Since: 2024-04-11
 */

import Vehicle from './Vehicle.ts'

class Bike extends Vehicle {
  private cadence: number

  constructor(color = 'unknown', maxSpeed = 0, speed = 0, cadence = 0) {
    super(color, maxSpeed, speed)
    this.cadence = cadence
  }

  // accelerate
  accelerate(appliedPower: number) {
    this.cadence += appliedPower
    return this.cadence
  }

  // ring bell
  Ring_Bell() {
    console.log('Ring ring!')
  }

  cadencestatus (): void {
    console.log(`-> Cadence: ${this.cadence}`)
  }
}

export default Bike
