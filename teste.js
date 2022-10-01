const cards = document.querySelectorAll('.card');

let hasFlippedCard = false;
let firstCard, secondCard;

//função para virar carta
function flipCard() {
    this.classList.add('flip')
    if(!hasFlippedCard){ 
        hasFlippedCard = true;
        firstCard = this;
        return;
    }
    secondCard = this;
    
    checkForMatch();
}

//função que checa se as cartas são iguais
function checkForMatch() {
    if(firstCard.dataset.card === secondCard.dataset.card) {
        disableCards(); 
        return;
    }
    unflipCards();
}

//remove o click do flip das cartas q sao iguais
function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
}

//remove o flip das cartas q nao sao iguais
function unflipCards() {
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
    }, 1500);
}

//adiciona evento de clique na carta
cards.forEach((card) => {
    card.addEventListener('click', flipCard)
});

//comparar as duas se n for igual tira a classe flip