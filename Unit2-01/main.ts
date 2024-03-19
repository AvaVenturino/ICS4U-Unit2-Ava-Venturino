/*
 * This is a program prints out stuff.
 * @author  Ava Venturino 
 * @version 1.0 
 * @since   2024-02-26
 */

class MrCoxallStack {
  private stack: string[];

  constructor() {
    this.stack = [];
  }

  push(value: string): void {
    this.stack.push(value);
  }

  showStack(): string {
    return this.stack.join(', ');
  }
}

function main(): void {
  // this function uses the MrCoxallStack
  const fruitStack = new MrCoxallStack();
  fruitStack.push('apple');
  fruitStack.push('banana');
  fruitStack.push('cherry');

  const colorStack = new MrCoxallStack();
  colorStack.push('red');
  colorStack.push('green');
  colorStack.push('blue');

  console.log(`Fruit items: ${fruitStack.showStack()}\n`);
  console.log(`Color items: ${colorStack.showStack()}\n`);
}

main();
