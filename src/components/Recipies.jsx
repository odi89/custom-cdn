import { useState } from "react"
const elvenShieldREcipie = {
    leatherStrips: 2,
    ironIngot: 1,
    refineMoonstone: 4
}
const elvenGountletsRecipie = {
    ...elvenShieldREcipie,
    refineMoonstone: 6
}

const Recipies = () => {
    const [recipe, setRecipe] = useState({})
    return (
        <div>
            <h3>Current Recipe:</h3>
            <button
                onClick={() => setRecipe(elvenShieldREcipie)}
            >
                Elven Shield Recipe
        </button>
            <button
                onClick={() => setRecipe(elvenGountletsRecipie)}
            >
                Elvent Gountlets Recipie
        </button>
            <ul>
                {Object.keys(recipe).map((material) => (
                    <li key={material}>
                        {material}: {recipe[material]}
                    </li>
                ))}
            </ul>

        </div>
    )
}

export default Recipies
