/*
 * This is a program prints out stuff.
 * @author  Ava Venturino 
 * @version 1.0 
 * @since   2024-02-26
 */

/**
 * This is a standard calculation program.
 */

class Main {

    /**
     * The starting calculateBoardFoot() function.
     *
     * @param args using args
     *
     */

    void main(String[] args) {
        // Creating a MrCoxallStack object
        MrCoxallStack fruitStack = new MrCoxallStack();
        System.out.println("The size of the stack is: " + fruitStack.size());
        System.out.println("Is the stack empty?: " + fruitStack.isEmpty());
        fruitStack.push("apple");
        fruitStack.push("banana");
        fruitStack.push("cherry");
        System.out.println("Fruit items: " + fruitStack.show());
        System.out.println("Popped item: " + fruitStack.pop());
        System.out.println("Fruit items: " + fruitStack.show());
        System.out.println("The size of the stack is: " + fruitStack.size());
        System.out.println("Is the stack empty?: " + fruitStack.isEmpty());
        System.out.println("\nDone.");
    }
}
