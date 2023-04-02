const mensagem = document.querySelector('.mensagem')
const computerHand = document.querySelector('.computer-hand')
const playerHand = document.querySelector('.player-hand')
const maos = ['scissor','paper','rock']
let maoJogador = ''
let maoComputador = ''
let index = 0

playerHand.addEventListener('click', ()=>{
	mensagem.innerHTML = '?'
	computerHand.innerHTML = '<img src="./img/question.png">'
	if(index > 2){index = 0}
	maoJogador = maos[index]
    playerHand.innerHTML = `<img src="./img/${maos[index]}.png">`
    index++
    
    console.log(maoJogador)
})

function lancaMao(){
    if(maoJogador === ''){
        alert('Clique no quadro do jogador para escolher pedra, papel ou tesoura!')
    }else{
    	computerHand.innerHTML = '<img src="./img/question.png">'
        maoComputador = maos[Math.floor(Math.random() * 3)]
        computerHand.innerHTML = `<img src="./img/${maoComputador}.png">`
        console.log(maoComputador)
    }

    if(maoComputador === maoJogador){
    	mensagem.innerHTML = 'EMPATOU'
    }
    if(maoComputador === 'scissor' && maoJogador === 'rock'){
    	mensagem.innerHTML = 'jogador venceu'
    }
    if(maoComputador === 'scissor' && maoJogador === 'paper'){
    	mensagem.innerHTML = 'computador vencer'
    }
    if(maoComputador === 'paper' && maoJogador === 'rock'){
    	mensagem.innerHTML = 'computador venceu'
    }
    if(maoComputador === 'paper' && maoJogador === 'scissor'){
    	mensagem.innerHTML = 'jogador venceu'
    }
    if(maoComputador === 'rock' && maoJogador === 'scissor'){
    	mensagem.innerHTML = 'computador venceu'
    }
    if(maoComputador === 'rock' && maoJogador === 'paper'){
    	mensagem.innerHTML = 'jogador venceu'
    }
}


