const pessoa = {
    primeiroNome : 'Camilla',
    ultimoNome : 'Falcao',
    endereco : {
        rua : 'Dalias',
        num : '470'
    },
    nomeCompleto : function(){
        return this.primeiroNome + ' ' + this.ultimoNome;
    }
};

pessoa.celular = '12345';

pessoa.enderecoCompleto = function(){
    return `Rua: ${this.endereco.rua}, ${this.endereco.num}.`;
}

function exibeDadosPessoa(p){
    alert(`\n
    Nome: ${p.nomeCompleto()}\n
    Endereco: ${p.enderecoCompleto()}\n
    Celular: ${p.celular}
    `);
}

exibeDadosPessoa(pessoa);