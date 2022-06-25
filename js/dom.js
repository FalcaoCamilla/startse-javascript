const lista = document.querySelector('#lista');

const elementoLi = document.createElement('li'); //criando li
elementoLi.textContent = 'Um novo item na lista'; //atribuindo conteúdo à "tag" li

lista.appendChild(elementoLi); //adicionando o elemento li na lista ul

const filhosDaLista = lista.querySelectorAll('li'); //selecionando todas li

/* lista.remove()

for(filho of filhosDaLista){ --> selecionando cada filho, cada li da lista (ul)
     lista.removeChild(filho); --> removendo os filhos um por um
} */

const botao = document.querySelector('button');
botao.addEventListener('click', function(){
    lista.remove();
}

) 


//STYLE
lista.className = 'novoponteiro'; //lista.setAttribute('class', 'novoponteiro')
lista.style.color = 'purple';
lista.style.cursor= 'pointer';