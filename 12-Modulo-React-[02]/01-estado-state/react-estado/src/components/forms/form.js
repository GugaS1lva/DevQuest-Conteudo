import { useState } from 'react'

const Form = (props) => {

    const [inputs, setInputs] = useState({
        image: '',
        value: '',
        suit: ''
    })

    const handleInputChange = (event) => {
        const { target } = event
        const { name } = target
        const { value } = target

        setInputs({
            ...inputs,
            [name]: value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        props.addCard(inputs)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="image" >Endereço de Imagem da Carta </label>
                    <input type="text" id="image" name="image" onChange={handleInputChange} value={inputs.image} />
                </div>
                <br></br>
                <div>
                    <label htmlFor="value">Nome da Carta </label>
                    <input type="text" id="value" name="value" onChange={handleInputChange} value={inputs.value} />
                </div>
                <br></br>
                <div>
                    <label htmlFor="suit" >Naipe da Carta </label>
                    <input type="text" id="suit" name="suit" onChange={handleInputChange} value={inputs.suit} />
                </div>
                <br></br>
                <input type="submit" />
            </form>
        </>
    )
}

export default Form 