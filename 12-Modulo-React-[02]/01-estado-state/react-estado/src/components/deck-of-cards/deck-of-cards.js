import { useEffect, useState } from 'react'

async function createDeck() {
    const response = await fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
    const deck = await response.json()

    return deck.deck_id
}

async function getCards(deckId) {
    const response = await fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=10`)
    return await response.json()
}

/* useState feito com CLASS:
    class DeckOfCards extends Component{
        constructor(){
            console.log('constructor')
            super()

            this.state = {
                cards: []
            }
        }

        async componentDidMount(){
            console.log('componentDidMount')
            const deckId = await createDeck()
            const cards = await getCards(deckId)
            
            this.setState({
                cards: cards.cards

            })
        }
        
        render(){
            console.log('render')
            return(
                <section>
                    <ul>
                        {
                            this.state.cards.map((card, index) => {
                                return (
                                    <li key={index}>
                                        <img src={card.image} alt={card.value} />
                                    </li>
                                )
                            })
                        }
                    </ul>
                </section>
            )
        }
    }
*/

const DeckOfCards = () => {
    const [deck, setDeck] = useState({
        cards: []
    })

    useEffect(() => {
        const fetchData = async () => {
            const deckId = await createDeck()
            const cards = await getCards(deckId)

            setDeck({
                cards: cards.cards

            })
        }

        fetchData()
    }, [])

    return (
        <section>
            <ul>
                {
                    deck.cards.map((card, index) => {
                        return (
                            <li key={index}>
                                <img src={card.image} alt={card.value} />
                            </li>
                        )
                    })
                }
            </ul>
        </section>
    )
}

export default DeckOfCards