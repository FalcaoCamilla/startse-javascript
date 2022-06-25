//SPLIT
const palavrasChave = 'cinema,futebol,televisão,viagem,boliche';
const hobbies = palavrasChave.split(',');

//JOIN
const tiposHobbies = hobbies.join(';')

console.log(tiposHobbies);

//CONCAT
const cidadesInterior=['araraquara', 'araras', 'limeira'];
const regioesMetropolitanas=['campinas', 'sao paulo'];

const cidadesGerais=cidadesInterior.concat(regioesMetropolitanas);

console.log(cidadesGerais);


//FROM
//criação de um array a partir de uma string
const x = Array.from('ABNT'); //[A, B, N, T]

//INCLUDES
const cidades = ['Rio', 'Foz'];
console.log(cidades.includes('Foz')) //true

//ITERAR 
const jogadores = [
    {
        nome: 'Beto',
        posicao: 'Atacante'
    },
    {
        nome: 'Gil',
        posicao: 'Zagueiro'
    },
    {
        nome: 'Milton',
        posicao: 'Volante'
    },
    {
        nome: 'Nuno',
        posicao: 'Volante'
    }
];

//MAP

function obtemNomeJogador(j){ //retornar o nome do primeiro elemento
    return j.nome;
}

let nomeJogadores = jogadores.map(obtemNomeJogador); //percorrer todo array utilizando a funcao acima, retornando todos os nomes (VALORES) em um novo array

console.log(nomeJogadores)

//FILTER

function obtemVolante(jogador){//retorna o elemento que tem posicao = volante
    return jogador.posicao === 'Volante';
}

const volantes = jogadores.filter(obtemVolante); //percorrer todo array utilizando a funcao, retornando todos os ELEMENTOS que tem posicao = volante

console.log(volantes);

//FOR EACH

function exibeNomeJogador(jogadorr){
    console.log(jogadorr.nome)
};

jogadores.forEach(exibeNomeJogador);