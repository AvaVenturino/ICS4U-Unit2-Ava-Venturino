/**
 * Class that defines airplane speed.
 *
 * @author Ava Venturino
 * @version 1.0
 * @since 2024-04-09
 */

import Airplane from './airplane.ts'

class Jet extends Airplane {

  // accelerate
  public accelerate(speed: number) {
    this.speed = speed * 2
    return this.speed
  }
}

export default Jet
