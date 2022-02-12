import { Params } from 'react-router'

export const getPokemons = async (page = 1) => {
  const res = await fetch(
    `https://pokeapi.co/api/v2/pokemon?offset=${page * 12}&limit=12`
  )

  const { results } = await res.json()

  return results
}

export const getPokemon = async (params: Params<string>) => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.pokemon}`)

  const pokemon = await res.json()

  return pokemon
}

export const getEvolutionChain = async (params: Params<string>) => {
  const res = await fetch(
    `https://pokeapi.co/api/v2/pokemon-species/${params.pokemon}`
  )

  const evolution = await res.json()

  return evolution
}
