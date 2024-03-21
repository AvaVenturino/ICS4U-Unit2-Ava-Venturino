/*
 * This is a program prints out stuff.
 * @author  Ava Venturino 
 * @version 1.0 
 * @since   2024-02-26
 */

import MrCoxallStack from './mrCoxallStack.ts'

// this function uses the MrCoxallStack
const fruitStack = new MrCoxallStack()
fruitStack.push('apple')
fruitStack.push('banana')
fruitStack.push('cherry')
console.log(`\nFruit items: ${fruitStack.showStack()}`)
let topFruit: string
topFruit = fruitStack.pop()!
console.log(`Popped fruit item: ${topFruit}`)
console.log(`Fruit items: ${fruitStack.showStack()}`)

const colorStack = new MrCoxallStack()
colorStack.push('red')
colorStack.push('green')
colorStack.push('blue')
console.log(`\nColor items: ${colorStack.showStack()}`)
let topColor: string
topColor = colorStack.pop()!
console.log(`Popped color item: ${topColor}`)
console.log(`Color items: ${colorStack.showStack()}`)

const animalStack = new MrCoxallStack()
animalStack.push('cow')
animalStack.push('koala')
animalStack.push('parrot')
console.log(`\nAnimals: ${animalStack.showStack()}`)
let topAnimal: string
topAnimal = animalStack.pop()!
console.log(`Popped animal item: ${topAnimal}`)
console.log(`Animals: ${animalStack.showStack()}`)
console.log(`\nDone.`)
