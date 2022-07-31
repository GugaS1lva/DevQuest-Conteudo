import { createContext, useState } from 'react'

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

    const { theme, setTheme } = useState(themes.light)

    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            {props.children}
        </ThemeContext.Provider>
    )
}