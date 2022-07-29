import { useContext } from "react"
import { ThemeContext } from "../../contexts/theme-context"
import { Button } from "../button/button"

export const ThemeTogglerButtom = () => {

    const { themes } = useContext(ThemeContext)

    console.log('ThemeTogglerButtom themes', themes)

    return (
        <div>
            <Button>Clique-Me!</Button>
        </div>
    )
}