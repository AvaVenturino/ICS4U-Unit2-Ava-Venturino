/**
 * This is the vehicle class.
 *
 * By: Ava Venturino
 * Version: 1.0
 * Since:   2024-04-02
 */

class Vehicle {
    protected color: string
    protected speed: number
    protected maxSpeed: number
    protected tireNum: number
  
    constructor (speed = 0, maxSpeed = 0, color = 'unknown', tireNum = 0) {
      this.color = color
      this.speed = speed
      this.maxSpeed = maxSpeed
      this.tireNum = tireNum
    }
  
    // acceleration method
    accelerate (accelerationPower: number, accelerationTime: number) {
      this.speed += (accelerationPower * accelerationTime)
      console.log(`New speed: ${this.speed}`)
    }
  
    // brake method
    brake (breakPower: number, breakTime: number) {
        this._speed = this._speed - (breakPower * breakTime)
        if (this._speed < 0) {
          this._speed = 0
    }
  
    // status method
    status (): void {
      console.log(`-> Speed: ${this.speed}`)
      console.log(`-> Max Speed: ${this.maxSpeed}`)
      console.log(`-> Color: ${this.color}`)
      console.log(`-> Tires: ${this.tireNum}`)
    }
  }
  export default Vehicle