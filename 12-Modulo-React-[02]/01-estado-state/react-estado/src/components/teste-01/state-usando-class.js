import { Component } from "react";
import './state-usando-class.css'

class Panel02 extends Component{
    constructor(){
        super()

        this.state = {
            title: 'Estado Inicial do Componente'
        }
    }

    render(){
        return(
            <header className="state-usando-class" onClick={() => this.setState({title: 'Estado Alterado do Componente'})}>
                <h2>{this.state.title}</h2>
            </header>
        )
    }
}

export default Panel02