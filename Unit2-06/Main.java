/*
 * Class that defines airplane speed.
 *
 * @author  Ava Venturino
 * @version 1.0
 * @since   2024-01-01
 */

public class FlyTest {
    public static void main(String[] args) {
        Airplane biplane = new Airplane();
        int speedPlane = biplane.setSpeed(212);
        System.out.println(speedPlane);
        Jet boeing = new Jet();
        int speedJet = boeing.setSpeed(422);
        System.out.println(speedJet);
	int counter = 0;
	while (counter < 4) {
            speedJet = boeing.accelerate(speedJet);
            System.out.println(speedJet);
            if (speedJet < 5000) {
                speedJet = boeing.accelerate(speedJet);
                System.out.println(speedJet);
            }
            counter++;
        }

        int speedPlane2 = biplane.setSpeed(speedPlane * 8);
        System.out.println(speedPlane2);
	System.out.println("\nDone.");
    }
}
