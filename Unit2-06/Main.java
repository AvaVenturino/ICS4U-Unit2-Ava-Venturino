/*
 * Class that defines airplane speed.
 *
 * @author  Samuel Webster
 * @version 1.0
 * @since   2024-01-01
 */

public class FlyTest {
    public static void main(String[] args) {
        Airplane biplane = new Airplane();
        biplane.setSpeed(212);
        System.out.println(biplane.setSpeed);
        Jet boeing = new Jet();
        boeing.setSpeed(422);
        System.out.println(boeing.setSpeed);
        int x = 0;
	while (x<5) {
            boeing.accelerate();
            System.out.println(biplane.accelerate());
	    if (biplane.getSpeed() > 5000) {
                boeing.getSpeed( 108 *2);
            } else {
                biplane.getSpeed();
            }
	    x++;
	}
	System.out.println("Done.");
    }
}
