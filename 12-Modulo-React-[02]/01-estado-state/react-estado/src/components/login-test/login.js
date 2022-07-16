import GuestMessage from "./tests/guestMessage"
import UserMessage from "./tests/userMessage"

function Login(){
    const isLoggedIn = true

    if (isLoggedIn) {
        return <UserMessage />
    }
    return <GuestMessage />
}

export default Login