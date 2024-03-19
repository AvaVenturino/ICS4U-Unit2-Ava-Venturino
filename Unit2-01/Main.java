/*
 * This is a program prints out stuff.
 * @author  Ava Venturino 
 * @version 1.0 
 * @since   2024-02-26
 */

import java.util.Stack;

public class Main {

    public static void main(String[] args) {
        // Create stacks for different types of items
        Stack<String> fruitStack = new Stack<>();
        Stack<String> colorStack = new Stack<>();
        Stack<String> animalStack = new Stack<>();

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
        System.out.println("Fruit items: " + fruitStack.toString() + "\n");
        System.out.println("Color items: " + colorStack.toString() + "\n");
        System.out.println("Animals: " + animalStack.toString() + "\n");
    }
}
