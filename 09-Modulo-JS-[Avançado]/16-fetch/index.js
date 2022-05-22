document.getElementById('tirar-carta').addEventListener('click', () => {
    tirarCartaAleatoria()
})

async function criarBaralhoEmbaralhado(){
    const url = "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
    const resposta = await fetch(url)
    return await resposta.json()
}
criarBaralhoEmbaralhado()

async function tirarUmaCarta(deck_id){
    const url = `https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=1`
    const resposta = await fetch(url)
    return await resposta.json()
}
tirarUmaCarta()

async function tirarCartaAleatoria(){
    const baralho = await criarBaralhoEmbaralhado()
    const carta = await tirarUmaCarta(baralho.deck_id)
    const imagemCarta = carta.cards[0].image
    document.getElementById('card').src = imagemCarta
}
tirarCartaAleatoria()