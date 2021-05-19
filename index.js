let baseURL = 'http://numbersapi.com/11/math?json'

function callNumbersApi(){
   let factDiv = document.getElementById('facts-div')
   axios.get(baseURL)
   .then(c1 => {
       let factP = document.createElement('p')
       factP.innerHTML = c1.data.text
       factDiv.append(factP)
       return axios.get(baseURL)
   })
   .then(c2 => {
       let factP = document.createElement('p')
       factP.innerHTML = c2.data.text
       factDiv.append(factP)
       return axios.get(baseURL)
   })
   .then(c3 => {
    let factP = document.createElement('p')
    factP.innerHTML = c3.data.text
    factDiv.append(factP)
    return axios.get(baseURL)
   })
   .then(c4 => {
    let factP = document.createElement('p')
    factP.innerHTML = c4.data.text
    factDiv.append(factP)
    return axios.get(baseURL)
})
}

callNumbersApi()

let getDeck1 = 'https://deckofcardsapi.com/api/deck/new/draw/?count=1'


function cardFunction(){
    axios.get(getDeck1)
    .then(deck =>{
        console.log(deck.data.cards[0].value + ' of ' + deck.data.cards[0].suit)
    })
    
    axios.get(getDeck1)
    .then(deck =>{
        console.log(deck.data)
        console.log(deck.data.cards[0].value + ' of ' + deck.data.cards[0].suit)
        return axios.get(`https://deckofcardsapi.com/api/deck/${deck.data.deck_id}/draw/?count=1`)
    })
    .then(deck2 =>{
        console.log(deck2.data.cards[0].value + ' of ' + deck2.data.cards[0].suit)
    })

}

cardFunction()

function drawCard(deckId){
    let cardDiv = document.getElementById('cards-div')
    let img = document.createElement('img')
    axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
    .then(deck =>{
        img.setAttribute('src', deck.data.cards[0].image)
        cardDiv.append(img)
    })
}

let button = document.querySelector('button')
button.addEventListener('click',()=>{
    axios.get(getDeck1)
    .then(deck =>{
        drawCard(deck.data.deck_id)
    })
})

// Make a request to the Deck of Cards API to request a single card from a newly shuffled deck. Once you have the card, console.log the value and the suit (e.g. “5 of spades”, “queen of diamonds”).

// Make a request to the deck of cards API to request a single card from a newly shuffled deck. Once you have the card, make a request to the same API to get one more card from the same deck.

// Once you have both cards, console.log the values and suits of both cards.

// Build an HTML page that lets you draw cards from a deck. When the page loads, go to the Deck of Cards API to create a new deck, and show a button on the page that will let you draw a card. Every time you click the button, display a new card, until there are no cards left in the deck.

// Here’s how this might look (with styling added):