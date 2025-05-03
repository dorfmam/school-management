import { Pessoa } from "./pessoa";

export class Professor extends Pessoa {
    constructor(
        nome: string,
        cpf: string,
        email: string,
        public materia: string
    ) {
        super(nome, cpf, email);
    }

    exibirResumo(): void {
        console.log(`\nProfessor(a): ${this.nome} | Matéria: ${this.materia}`);
    }
}
