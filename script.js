
let sum = 0
let cards = []
let hasBlackjack = false
let isAlive = false
let message = ''
let messageEl = document.getElementById('message-el')
let sumEl = document.getElementById('sum-el')
let cardEl = document.getElementById('card-el')
let player = {
    name : 'Nnaji Makuochukwu',
    chips : '145'
}
let playerEl = document.getElementById('player-el')
playerEl.textContent = player.name + ': $' + player.chips


function getRandomCard(){
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if(randomNumber === 1){
        return 11
    } else if (randomNumber > 10){
        return 10
    }else{
        return randomNumber
    }
    
}
function renderGame(){
    cardEl.textContent = "Cards: " 
    for(i = 0 ; i < cards.length; i++){
        cardEl.textContent += cards[i] + " " 
    }
    sumEl.textContent = "Sum:" + sum
    if(sum < 21){
        message ='Do you want to draw a new card'
    }else if ( sum === 21){
        message ='You have a blackjack'
        hasBlackjack = true
    }else{
        message ='You are out of the game'
        isAlive = false
    }
    messageEl.textContent = message
    
}
function startGame(){
    
     isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard,secondCard]
     sum = firstCard + secondCard 
     renderGame()
}

function newCard(){
    if(isAlive === true && hasBlackjack === false){
        let card = getRandomCard()
        sum  += card
        cards.push(card)
        renderGame()
    }

}