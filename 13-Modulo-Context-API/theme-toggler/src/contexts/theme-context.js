import { createContext } from 'react'

export const themes = {
    light: {
        background: 'white',
        color: 'black'
    },
    dark: {
        background: 'black',
        color: 'white'
    }
}

export const ThemeContext = createContext({})

export const ThemeProvider = (props) => {
    return (
        <ThemeContext.Provider value={{themes}}>
            {props.children}
        </ThemeContext.Provider>
    )
}