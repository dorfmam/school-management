import { Professor } from "./professor";
import { Aluno } from "./aluno";

export class Turma {
    private alunos: Aluno[] = [];

    constructor(public nome: string, public professor: Professor) {}

    adicionarAluno(...aluno: Aluno[]): void {
        this.alunos.push(...aluno);
    }

    listarAlunos(): void {
        console.log(`\nAlunos da turma "${this.nome}":\n`);
        this.alunos.forEach((aluno) => {
            console.log(`- ${aluno.nome}`);
        });
    }

    exibirNotas(): void {
        console.log(`\nNotas da turma "${this.nome}":\n`);
        this.alunos.forEach((aluno) => aluno.exibirResumo());
    }
}
