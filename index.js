class heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade; 
        this.tipo = tipo;
    }

    atacar() {
        let ataque;
        
        switch (this.tipo) {
            case 'mago':
                ataque = 'magia';
                break;
            case 'guerreiro':
                ataque = 'espada';
                break;
            case 'monge':
                ataque = 'artes maciais';
                break;
            case 'ninja':
                ataque = 'shuriken';
                break;
            default:
                ataque = 'ataque indefinido';
        }

        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}

const heroi1 = new heroi('Shurek', 1000, 'mago');
heroi1.atacar();