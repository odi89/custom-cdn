import "../styles/index.scss"
import Recipies from "./Recipies"
const App = () => {
    return (
        <>
            <section className="hero">
                <main>
                    <section>
                        <h1>Oh Hai, React</h1>
                    </section>
                </main>
                <Recipies />
            </section>
        </>
    )
}
export default App