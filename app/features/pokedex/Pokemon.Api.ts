export const getPokemons = async (page = 1) => {
  const res = await fetch(
    `https://pokeapi.co/api/v2/pokemon?offset=${page * 12}&limit=12`
  )

  const { results } = await res.json()

  return results
}
