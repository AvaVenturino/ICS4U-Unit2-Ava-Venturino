/*
 * This is a program prints out stuff.
 * @author Ava Venturino
 * @version 1.0
 * @since 2024-02-26
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
        // Create a stack for fruits
        final Stack<String> fruitStack = new Stack<>();
        fruitStack.push("apple");
        fruitStack.push("banana");
        fruitStack.push("cherry");
        System.out.println("\nFruit items: " + fruitStack);

        // Pop an item from the fruit stack
        final String topFruit = fruitStack.pop();
        System.out.println("Popped fruit item: " + topFruit);
        System.out.println("Fruit items: " + fruitStack);

        // Create a stack for colors
        final Stack<String> colorStack = new Stack<>();
        colorStack.push("red");
        colorStack.push("green");
        colorStack.push("blue");
        System.out.println("\nColor items: " + colorStack);

        // Pop an item from the color stack
        final String topColor = colorStack.pop();
        System.out.println("Popped color item: " + topColor);
        System.out.println("Color items: " + colorStack);

        // Create a stack for animals
        final Stack<String> animalStack = new Stack<>();
        animalStack.push("cow");
        animalStack.push("koala");
        animalStack.push("parrot");
        System.out.println("\nAnimals: " + animalStack);

        // Pop an item from the animal stack
        final String topAnimal = animalStack.pop();
        System.out.println("Popped animal item: " + topAnimal);
        System.out.println("Animals: " + animalStack);

        System.out.println("\nDone.");
    }
}
