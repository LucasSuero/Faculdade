class Professor {
    String nome;

    public Professor(String nome) {
        this.nome = nome;
    }
}

class Escola {
    String nome;
    Professor professor;

    public Escola(String nome, Professor professor) {
        this.nome = nome;
        this.professor = professor;
    }

    public void mostrarProfessor() {
        System.out.println("Professor da escola: " + professor.nome);
    }
}

public class EscolaProfessor {
    public static void main(String[] args) {

        Professor prof = new Professor("Carlos");
        Escola escola = new Escola("Escola Central", prof);

        escola.mostrarProfessor();

    }
}