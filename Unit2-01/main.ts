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

const colorStack = new MrCoxallStack()
colorStack.push('red')
colorStack.push('green')
colorStack.push('blue')

const animalStack = new MrCoxallStack()
animalStack.push('cow')
animalStack.push('koala')
animalStack.push('parrot')

console.log(`Fruit items: ${fruitStack.showStack()}\n`)
console.log(`Color items: ${colorStack.showStack()}\n`)
console.log(`Animals: ${animalStack.showStack()}\n`)
