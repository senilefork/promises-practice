let baseURL = 'http://numbersapi.com/11/math?json'

async function callNumbersApi2(){
    let factArr = []
    let factDiv = document.getElementById('facts-div');

    let fact1 = await axios.get(baseURL)
    factArr.push(fact1)
    let fact2 = await axios.get(baseURL)
    factArr.push(fact2)
    let fact3 = await axios.get(baseURL)
    factArr.push(fact3)
    let fact4 = await axios.get(baseURL)
    factArr.push(fact4)

    for(let i = 0; i < factArr.length; i++){
        let factP = document.createElement('p')
        factP.innerHTML = factArr[i].data.text
        factDiv.append(factP)
    }
}

callNumbersApi2();

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

async function cardFunction2(){
    let getDeck1 = 'https://deckofcardsapi.com/api/deck/new/draw/?count=1'

    let firstDraw = await axios.get(getDeck1)
    let secondDraw = await axios.get(`https://deckofcardsapi.com/api/deck/${firstDraw.data.deck_id}/draw/?count=1`)

    console.log(firstDraw.data.cards[0].value + ' of ' + firstDraw.data.cards[0].suit)
    console.log(secondDraw.data.cards[0].value + ' of ' + secondDraw.data.cards[0].suit)
}

cardFunction2()

async function drawCard2(deckId){
    let cardDiv = document.getElementById('cards-div')
    let img = document.createElement('img')
    let deck = await axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)

    img.setAttribute('src', deck.data.cards[0].image)
    cardDiv.append(img)
}

let button = document.querySelector('button')
button.addEventListener('click', async ()=>{
    let deck = await axios.get('https://deckofcardsapi.com/api/deck/new/draw/?count=1')
    
    drawCard2(deck.data.deck_id)

})