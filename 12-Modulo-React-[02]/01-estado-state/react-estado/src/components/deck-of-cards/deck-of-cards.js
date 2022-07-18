import { useEffect, useState } from 'react'
import Form from '../forms/form'

async function createDeck() {
    const response = await fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
    const deck = await response.json()

    return deck.deck_id
}

async function getCards(deckId) {
    const response = await fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
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

    const addCard = (newCard) => {
        setDeck({
            cards: [...deck.cards, newCard]
        })
    }

    return (
        <section>
            <Form addCard={addCard} />

            <ul>
                {
                    deck.cards.map((card, index) => {
                        return (
                            <li key={index}>
                                <img src={card.image} alt={card.value} />
                                <p>{card.value} {card.suit}</p>
                            </li>
                        )
                    })
                }
            </ul>
        </section>
    )
}

export default DeckOfCards