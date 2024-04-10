/*
 * Class that defines airplane speed.
 *
 * @author  Ava Venturino
 * @version 1.0
 * @since   2024-04-09
 */

export java.util.Airplane

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
