import "../styles/index.scss"
import Nav from "./Nav"
import ChatBubble from "./ChatBubble"
import NudgeContainer from "./NudgeContainer"
import Hello from "../nudges/Hello"

const App = () => {
    return (
        <>
            <Nav />
            <ChatBubble />
            <NudgeContainer>
                <Hello />
            </NudgeContainer>

        </>
    )
}
export default App