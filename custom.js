var list;
window.onload = function(e){ 
    list = document.getElementById("actionCenter");   
}

function shuffleCard() {
    let cards = list.children;
    let i = 0;
    cards = Array.prototype.slice.call(cards);
    cards = shuffleCards(cards);

    const fragment = document.createDocumentFragment();
    while (i < cards.length) {
        fragment.appendChild(cards[i]);
        ++i;
    }
    list.appendChild(fragment);
}

function sortCards() {
    let cards = list.childNodes;
    let cardsArr = [];
    for (let i in cards) {
        if (cards[i].nodeType == 1) {
            cardsArr.push(cards[i]);
        }
    }

    cardsArr.sort((a, b) => {
        return a.innerHTML == b.innerHTML
            ? 0
            : a.innerHTML > b.innerHTML
                ? 1
                : -1;
    });

    const fragment = document.createDocumentFragment();
    for (let i = 0; i < cardsArr.length; ++i) {
        fragment.appendChild(cardsArr[i]);
    }
    list.appendChild(fragment);
}

function shuffleCards (cards) {
    let shuffledCards = cards.slice(0);
    let temp;
    let i = shuffledCards.length;
    let rand;
    while (--i) {
      rand = Math.floor(i * Math.random());
      temp = shuffledCards[rand];
      shuffledCards[rand] = shuffledCards[i];
      shuffledCards[i] = temp;
    }
    return shuffledCards;
}
  