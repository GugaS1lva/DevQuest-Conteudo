import { useContext } from "react"
import { ThemeContext } from "../../contexts/theme-context"
import { Button } from "../button/button"

export const ThemeTogglerButtom = () => {

    const { theme, setTheme } = useContext(ThemeContext)

    return (
        <div>
            <Button onClick={() => setTheme(theme)}>Clique-Me!</Button>
        </div>
    )
}