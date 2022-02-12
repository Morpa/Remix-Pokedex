import { LinksFunction, LoaderFunction } from 'remix'

import { PokemonApi, PokemonUtils } from '~/features/pokedex'
import { Home } from '~/features/pokedex/layouts/home'
import homeStyle from '~/styles/home.css'

export const links: LinksFunction = () => [
  { href: homeStyle, rel: 'stylesheet' }
]

export function ErrorBoundary() {
  return <h3 className="error">Whoops! 💣</h3>
}

export const loader: LoaderFunction = async ({ request }) => {
  const page: number = PokemonUtils.getPageByUrl(request.url)

  return {
    pokemons: await PokemonApi.getPokemons(page)
  }
}

export default function () {
  return <Home />
}
