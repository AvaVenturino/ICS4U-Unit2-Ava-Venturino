/**
 * Class that defines airplane speed.
 *
 * @author Ava Venturino
 * @version 1.0
 * @since 2024-04-09
 */

import Airplane from './airplane.ts'
import Jet from './jet.ts'

const biplane = new Airplane()
const planeSpeed = biplane.setSpeed(212)
console.log(`${planeSpeed}`)

const boeing = new Jet()
let jetSpeed = boeing.setSpeed(422)

for (let counter = 0; counter < 4; counter++) {
  jetSpeed = boeing.accelerate(jetSpeed)
  console.log(`${jetSpeed}`)
  if (jetSpeed < 5000) {
    jetSpeed = boeing.accelerate(jetSpeed)
    console.log(`${jetSpeed}`)
  }
}
let planeSpeed2 = biplane.setSpeed(planeSpeed * 8)
console.log(`${planeSpeed2}`)

console.log("\nDone.")
