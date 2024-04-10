/*
 * Class that defines airplane speed.
 *
 * @author  Ava Venturino
 * @version 1.0
 * @since   2024-04-09
 */

public class Airplane {
    private double speed;
	      
    // variables
    public Airplane() {
        this.speed = 0;
    }

    // set speed
    public void setSpeed(double newSpeed) {
        this.speed = newSpeed;
    }

    // get speed
    public double getSpeed() {
        return this.speed;
    }
}

public class Jet extends Airplane {

    private static final int MULTIPLIER = 2;

    public Jet() {
        super();
    }

    public void setspeed(int speed) {
        super.setSpeed(speed * MULTIPLIER);
    }

    public void accelerate() {
        super.setSpeed(getSpeed() * MULTIPLIER);
    }
}
