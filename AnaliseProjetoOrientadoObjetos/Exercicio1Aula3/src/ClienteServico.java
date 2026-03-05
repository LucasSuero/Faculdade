class Servico {

    public void executarServico() {
        System.out.println("Servico executado.");
    }

}

class Cliente {

    public void solicitarServico(Servico servico) {
        System.out.println("Cliente solicitando servico...");
        servico.executarServico();
    }

}

public class ClienteServico {

    public static void main(String[] args) {

        Cliente cliente = new Cliente();
        Servico servico = new Servico();

        cliente.solicitarServico(servico);

    }
}