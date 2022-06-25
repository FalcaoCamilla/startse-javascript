const listaTarefas = document.querySelector('#listaTarefas')
const txt = document.querySelector('#txt');
const botaoAdd = document.querySelector('#botaoAdd');

botaoAdd.addEventListener('click', function(){
    const txtTarefa = txt.value;
    txt.value = '';
    listaTarefas.appendChild(addTarefa(txtTarefa));
    txt.focus();
});

function addTarefa(txtTarefa){
    const elementoLi = document.createElement('li');
    const elementoSPAN = document.createElement('span');

    elementoSPAN.setAttribute('id','tarefa')
    elementoSPAN.textContent = txtTarefa;
    elementoLi.className = 'naoRealizada'

    elementoLi.appendChild(elementoSPAN);
    elementoLi.appendChild(adicionarBotaoRemover());

    elementoSPAN.addEventListener('click', function(){
        if(this.id == 'tarefa'){
            if(this.parentNode.className === 'naoRealizada'){
                this.parentNode.className = 'realizada'
            } else {
                this.parentNode.className = 'naoRealizada'
            }
        }
    })

    return elementoLi;
}

function adicionarBotaoRemover(){
    const botaoRemover = document.createElement('button');
    botaoRemover.textContent='✘';
    botaoRemover.className = 'remover';

    botaoRemover.addEventListener('click', function(){
        listaTarefas.removeChild(this.parentNode); //filho de ul que seja nó pai do button
    }

    )

    return botaoRemover
}
