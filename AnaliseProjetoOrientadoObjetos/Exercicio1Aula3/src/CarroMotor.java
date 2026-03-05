class Motor {
    void ligar() {
        System.out.println("Motor ligado.");
    }
}

class Carro {
    private Motor motor;

    public Carro() {
        motor = new Motor();
    }

    public void ligarCarro() {
        motor.ligar();
        System.out.println("Carro funcionando.");
    }
}

public class CarroMotor {
    public static void main(String[] args) {

        Carro carro = new Carro();
        carro.ligarCarro();

    }
}
