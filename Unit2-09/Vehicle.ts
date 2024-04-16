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
      this.speed = (accelerationPower * accelerationTime) + this.speed
      if (this.speed > this.maxSpeed) {
        this.speed = this.maxSpeed
      }
    }
  
    // brake method
    brake (breakPower: number, breakTime: number) {
        this.speed = this.speed - (breakPower * breakTime)
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