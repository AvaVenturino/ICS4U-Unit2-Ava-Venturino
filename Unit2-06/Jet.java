/*
 * This is a program prints out stuff.
 * @author Ava Venturino
 * @version 1.0
 * @since 2024-02-26
 */

/**
 * This is a standard calculation program.
 */

public class Jet extends Airplane {

    /**
     * Number, 2.
     */

    private static final int MULTIPLIER = 2;

    /**
     * Represents a stack data structure implemented using a List.
     * This list stores elements as strings.
     */

    public Jet() {
    }

    /**
     * Represents a stack data structure implemented using a List.
     *
     * @param speed using speed
     */

    public void setspeed(int speed) {
        super.setSpeed(speed * MULTIPLIER);
    }

    /**
     * Represents a stack data structure implemented using a List.
     * This list stores elements as strings.
     */

    public void accelerate() {
        super.setSpeed(super.getSpeed() * MULTIPLIER);
    }
}
