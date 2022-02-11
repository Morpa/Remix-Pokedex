import { LoaderFunction } from 'remix'
import { PokemonApi } from '~/features/pokedex'
import { getPageByUrl } from '~/features/pokedex/Pokemon.utils'

export function ErrorBoundary() {
  return <h3>Whoops! 💣</h3>
}

export const loader: LoaderFunction = async ({ request }) => {
  const page: number = getPageByUrl(request.url)

  return {
    pokemons: await PokemonApi.getPokemons(page)
  }
}

export default function Index() {
  return <h1>CARAJO</h1>
}
