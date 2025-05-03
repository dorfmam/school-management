export abstract class Pessoa {
    constructor(
        public nome: string,
        protected cpf: string,
        public email: string
    ) {}

    abstract exibirResumo(): void;
}
