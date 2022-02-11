/* export type Specie = {
  name: string
  image: string
} */

export type Chain = {
  evolves_to: Chain[]
  species: Species
}

export type Species = {
  name: string
  url: string
}

export type Pokemon = {
  id: number
  types: Type[]
  sprites: Sprites
}

export type Sprites = {
  other?: Other
}

export type Other = {
  'official-artwork': OfficialArtwork
}

export type OfficialArtwork = {
  front_default: string
}

export type Type = {
  slot: number
  type: Species
}

export type PokemonsLoaderData = {
  id: number
  name: string
  url: string
}
