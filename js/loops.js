const op = ['soma', 'subtracao', 'divisao', 'multiplicacao']

function montaTextoDaLista(){
    let textoDaLista = '';
    for(let i=0; i < op.length; i++){
        textoDaLista += '<li>' + op[i] + '</li>';
    }
    return textoDaLista;
}

document.querySelector('#listaOperacoes').innerHTML = montaTextoDaLista();

//<li>soma</li>
//<li>subtracao</li>
//<li>divisao</li>
//<li>multiplicacao</li>

//LET OF - percorrer o array
let jogadores = [
    {
        nome: 'Milla',
        funcao: 'Duelista',
    },
    {
        nome: 'Neto',
        funcao: 'Iniciador',
    },
    {
        nome: 'Hugo',
        funcao: 'Sentinela',
    }
];

for(let posicao of jogadores){
    console.log(posicao.nome)
}

//WHILE

const op1 = ['soma', 'subtracao', 'divisao', 'multiplicacao']
let i = 0;
while(i < op1.lengt){
    console.log(op1[i])
    i++;
}


//DO WHILE
const op2 = ['soma', 'subtracao', 'divisao', 'multiplicacao']
let j = 0;
do{
    alert('treste');
    j++;
} while(j < op2.length)