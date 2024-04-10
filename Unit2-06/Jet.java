export java.util.Jet
import java.util.Airplane       

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
