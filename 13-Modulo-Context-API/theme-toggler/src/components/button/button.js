import { useContext } from "react"
import { ThemeContext } from "../../contexts/theme-context"

export const Button = (props) => {

    const { themes } = useContext(ThemeContext)
    
    console.log('Button themes', themes)

    return (
        <button {...props} />
    )
}