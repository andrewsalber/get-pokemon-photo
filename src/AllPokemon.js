function AllPokemon(props) {
    return (
        <div>
            <select value={props.currPoke} onChange={props.onChange}>
                {props.list.map((pokemon) => 
                    <option value={pokemon}>
                        {pokemon}
                    </option>
                    )}
            </select>
        </div>
    )
}

export default AllPokemon;