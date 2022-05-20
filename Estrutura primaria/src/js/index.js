/* 
 OBJETIVO 1 - quando passar o mouse em cima do personagem temos que:

  - colocar a classe selecionado no personagem que passamos o mouse em cima para adicionar a animação nele 

 - retirar a classe selecionado do personagem que está selecionado


 OBJETIVO 2 - quando passar o mouse em cima do personagem, trocar a imagem e nome do personagem grande

    - alterar a imagem do jogador 1
    - alterar o nome do jogador 1
*/


// const homemDeFerro = document.getElementById('homem-de-ferro')
// homemDeFerro.addEventListener('mouseenter', () => {
//   console.log('teste');
// })
const personagens = document.querySelectorAll('.personagem')

personagens.forEach((personagem) => {
  personagem.addEventListener('mouseenter', () => {

    const idSelecionado = personagem.attributes.id.value;

    if(idSelecionado === 'ultron') return;

    const personagemSelecionado = document.querySelector('.selecionado')
    personagemSelecionado.classList.remove('selecionado')
    //console.log(personagemSelecionado)
    personagem.classList.add('selecionado');

    const imgPersonagemSelecionado = document.getElementById('personagem-jogador-1')
    imgPersonagemSelecionado.src = `./Source/Imagens/${idSelecionado}.png`

    const nomeJogador1 = document.getElementById('personagem-selecionado');
    const nomeSelecionado = personagem.getAttribute('data-base');

    nomeJogador1.innerHTML = nomeSelecionado;
  })
})