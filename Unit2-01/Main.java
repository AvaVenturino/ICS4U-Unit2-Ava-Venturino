/*
 * This is a program prints out stuff.
 * @author  Ava Venturino
 * @version 1.0
 * @since   2024-02-26
 */

import java.util.Stack;

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
        // Create stacks for different types of items
        final Stack<String> fruitStack = new Stack<>();
        final Stack<String> colorStack = new Stack<>();
        final Stack<String> animalStack = new Stack<>();

        // Push items onto the fruit stack
        fruitStack.push("apple");
        fruitStack.push("banana");
        fruitStack.push("cherry");

        // Push items onto the color stack
        colorStack.push("red");
        colorStack.push("green");
        colorStack.push("blue");

        // Push items onto the animal stack
        animalStack.push("cow");
        animalStack.push("koala");
        animalStack.push("parrot");

        // Print out the stacks
        System.out.println("Fruit items: " + fruitStack.toString());
        System.out.println("Color items: " + colorStack.toString());
        System.out.println("Animals: " + animalStack.toString());
    }
}
