const findCharacters = async () => {
    const res = await fetch('https://rickandmortyapi.com/api/character');
    const { results } = await res.json();
console.log(results);
    return results.map((character) => ({
        id: character.id,
        name: character.name,
        image: character.image
    }));
};

const findCharacterById = async (id) => {
    const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);

    const results = await res.json();
    
    return results
}

export { findCharacters, findCharacterById }