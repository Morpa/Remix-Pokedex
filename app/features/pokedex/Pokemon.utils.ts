import { Chain, Specie } from './Pokemon.types'

export const ARTWORK_IMAGE =
  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork'

export const getPageByUrl = (requestUrl: string) => {
  const url = new URL(requestUrl)
  const page = url.searchParams.get('page')
  const numberPage = !isNaN(Number(page)) ? Number(page) : 0

  return Math.floor(Math.max(0, numberPage))
}

function getIdByUrl(url: string) {
  const parts = url.split('/')
  return parts[parts.length - 2]
}

export const evolutionRecursive = (
  chainParent: Chain | Chain[],
  species: Specie[] = []
): Specie[] => {
  const chain = Array.isArray(chainParent) ? chainParent[0] : chainParent
  const envolveTo = chain.evolves_to

  if (!species.length) {
    species.push({
      name: chain.species.name,
      image: `${ARTWORK_IMAGE}/${getIdByUrl(chain.species.url)}.png`
    })

    return evolutionRecursive(envolveTo, species)
  }

  species.push({
    name: chain.species.name,
    image: `${ARTWORK_IMAGE}/${getIdByUrl(chain.species.url)}.png`
  })

  if (!envolveTo || !envolveTo.length) {
    return species
  }

  return evolutionRecursive(envolveTo, species)
}
