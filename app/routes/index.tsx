import { LoaderFunction } from 'remix'

import { PokemonApi, PokemonUtils } from '~/features/pokedex'
import { Home } from '~/features/pokedex/layouts/home'

export function ErrorBoundary() {
  return <h3>Whoops! 💣</h3>
}

export const loader: LoaderFunction = async ({ request }) => {
  const page: number = PokemonUtils.getPageByUrl(request.url)

  return {
    pokemons: await PokemonApi.getPokemons(page)
  }
}

export default function Index() {
  return <Home />
}
