/**
 * Class that defines airplane speed.
 *
 * @author Ava Venturino
 * @version 1.0
 * @since 2024-04-09
 */

import Airplane from './airplane.ts'

public export class Jet extends Airplane {

  constructor() {
    super()
  }

  public setspeed(speed: number): void {
    super.setSpeed(speed * 2)
  }

  public accelerate(): void {
    super.setSpeed(super.getSpeed() * 2)
  }
}
