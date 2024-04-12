/*
 * This program is a vehicle class.
 *
 * @author  Mr Coxall
 * @version 1.0
 * @since   2020-01-01
 */

import Truck from "./Truck.ts"
import Bike from "./Bike.ts"

const bmx = new Bike(0, 40, 'Red', 0)

console.log('Created Bmx bike.\nStatus:\n')
bmx.status()
bmx.cadencestatus()

console.log('Set the cadense to 10\n')
bmx.speed = 20
bmx.status()
bmx.cadencestatus()

console.log('\nAccelerate by 15:')
bmx.accelerate(15)
bmx.speed = 50
bmx.status()
bmx.cadencestatus()

console.log('\nRing bell.')

const bigTruck = new Truck(0, 200, 'Grey', 'HGC-3456F')

console.log('Created a Truck.\nStatus:\n')
bigTruck.status()
bigTruck.plateStatus()
console.log('\nAccelerating, 10 of power for ten seconds:')
bigTruck.accelerate(10, 10)
console.log('New speed: ' + bigTruck.speed)

console.log('\nBreaking, 10 of power for 10 sec.')
bigTruck.accelerate(10, 10)
console.log('New speed: ' + bigTruck.speed)

console.log('\nApplyed air pressure of 10:')
bigTruck.applyAir(10)
bigTruck.applyAirStatus()

console.log('\nDone.')

