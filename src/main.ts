// Sistema de Gestão Escolar - Versão 1.0
// Desenvolvido por Caio Dorfmam
// Simula professores, turmas e alunos com notas e aprovação


import { Turma } from "./models/turma";
import { Professor } from "./models/professor";
import { Aluno } from "./models/aluno";

const professoraMatematica = new Professor(
    "Alessandra Gutierrez",
    "222.333.444-55",
    "professoraalessandra@gmail.com",
    "Matemática"
);

const turmaMatematica = new Turma("3º Ano A - Matemática", professoraMatematica);

professoraMatematica.exibirResumo();

const alunos: Aluno[] = [
    new Aluno("Maria Clara Souza", "123.456.789-00", "mariaclara@gmail.com", 1),
    new Aluno("João Pedro Martins", "112.233.445-66", "joaopedro@gmail.com", 2),
    new Aluno("Vinícius da Silva", "321-654-987-00", "viniciussilva@gmail.com", 3),
    new Aluno("Letícia do Nascimento", "110.220.330-44", "leticiadonascimento@gmail.com", 4),
    new Aluno("Juliana Campos", "101.202.303-40", "julianacampos.@gmail.com", 5),
    new Aluno("Pedro Fagundes", "133.155.177-99", "pedrofagundes@gmail.com", 6),
    new Aluno("Miriam Oliveira", "660.770.880-99", "miriamoliveira@gmail.com", 7),
    new Aluno("Gabriel Xavier", "414.515.616.71", "gabrielxavier@gmail.com", 8),
    new Aluno("Luan Teixeira", "255.366.477-88", "luanteixeira@gmail.com", 9),
    new Aluno("Nicole Barbosa", "988.977.966-95", "nicolebarbosa@gmail.com", 10),
];

turmaMatematica.adicionarAluno(...alunos);

turmaMatematica.listarAlunos();

alunos[0].adicionarNota("Matemática", [7, 7, 8, 6]);
alunos[1].adicionarNota("Matemática", [3, 2, 3, 5]);
alunos[2].adicionarNota("Matemática", [5, 6, 5, 8]);
alunos[3].adicionarNota("Matemática", [4, 4, 6, 6]);
alunos[4].adicionarNota("Matemática", [9, 10, 10, 7]);
alunos[5].adicionarNota("Matemática", [8, 6, 8, 7]);
alunos[6].adicionarNota("Matemática", [6, 5, 6, 7]);
alunos[7].adicionarNota("Matemática", [3, 3, 5, 6]);
alunos[8].adicionarNota("Matemática", [2, 4, 5, 3]);
alunos[9].adicionarNota("Matemática", [8, 10, 10, 9]);

turmaMatematica.exibirNotas();
