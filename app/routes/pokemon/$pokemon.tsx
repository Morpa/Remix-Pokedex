import type { LinksFunction, LoaderFunction, MetaFunction } from 'remix'
import pick from 'lodash/pick'

import { PokemonApi, PokemonUtils } from '~/features/pokedex'
import { PokemonPage } from '~/features/pokedex/layouts/pokemon'

import style from '~/styles/pokemon-page.css'
import styleMedium from '~/styles/pokemon-page-medium.css'

export const links: LinksFunction = () => [
  { href: style, rel: 'stylesheet' },
  {
    rel: 'stylesheet',
    href: styleMedium,
    media: 'print, (max-width: 700px)'
  }
]

export const meta: MetaFunction = ({ data }) => {
  return { title: `Pokedex | ${data.pokemon.name}` }
}

export function ErrorBoundary() {
  return <h3 className="error">Whoops! 💣</h3>
}

export const loader: LoaderFunction = async ({ params }) => {
  const pokemon = await PokemonApi.getPokemon(params)
  const evolution = await PokemonApi.getEvolutionChain(params)
  const evolutionsChain = await fetch(evolution.evolution_chain.url).then(
    (res) => res.json()
  )
  const evolutions = PokemonUtils.evolutionRecursive(evolutionsChain.chain, [])

  return {
    pokemon: pick(pokemon, ['id', 'name', 'types', 'sprites', 'stats']),
    evolutions
  }
}

export default function () {
  return <PokemonPage />
}
