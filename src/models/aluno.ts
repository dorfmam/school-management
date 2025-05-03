import { Pessoa } from "./pessoa";

export class Aluno extends Pessoa {
    private notasPorDisciplina: { [disciplina: string]: number[] } = {};

    constructor(
        nome: string,
        protected cpf: string,
        email: string,
        protected matricula: number
    ) {
        super(nome, cpf, email);
    }

    adicionarNota(disciplina: string, notas: number[]): void {
        if (!this.notasPorDisciplina[disciplina]) {
            this.notasPorDisciplina[disciplina] = [];
        }
        this.notasPorDisciplina[disciplina].push(...notas);
    }

    calcularMedia(disciplina: string): number {
        const notas = this.notasPorDisciplina[disciplina];
        if (!notas || notas.length === 0) {
            return 0;
        }

        const total = notas.reduce((acc, nota) => acc + nota, 0);
        return total / notas.length;
    }

    verificarAprovacao(disciplina: string): boolean {
        return this.calcularMedia(disciplina) >= 6;
    }

    exibirResumo(): void {
        console.log(`Aluno: ${this.nome} | Matrícula: ${this.matricula}`);
        for (const disciplina in this.notasPorDisciplina) {
            const notas = this.notasPorDisciplina[disciplina];
            const media = this.calcularMedia(disciplina).toFixed(2);
            const status = this.verificarAprovacao(disciplina)
                ? "Aprovado"
                : "Reprovado";

            console.log(
                `${disciplina}: Notas: [${notas.join(
                    ", "
                )}] | Média: ${media} | ${status}`
            );
        
        console.log("-------------------------------------------------------------");

        }
    }
}
