document.querySelector('#t1').textContent='JavaScript - Introdução'
document.querySelector('#t2').textContent='Exemplificando algumas funcionalidades'

function mudaCor(){
    const menu = document.querySelector('#coresFundo');
    const cor = menu.options[menu.selectedIndex].value;
    document.body.style.background = cor;
}