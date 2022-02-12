import { useEffect, useState } from 'react'
import { Link } from 'remix'

import { Types, Pokeball } from '~/features/pokedex'

type PokemonCardProps = {
  name: string
  url: string
  to: string
} & Partial<Types.Pokemon>

export function PokemonCard({ name, url, to }: PokemonCardProps) {
  const [pokemon, setPokemon] = useState<PokemonCardProps | null>(null)

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setPokemon(data)
      })
  }, [url])

  return (
    <Link
      to={to}
      className={`pokemon-card ${pokemon?.types?.[0]?.type?.name ?? ''}`}
    >
      <Pokeball />
      <div className="pokemon-card__content">
        <p>#{pokemon?.id}</p>
        <h2>{name}</h2>
        {pokemon?.types?.map((type) => (
          <span
            key={`${crypto.randomUUID()}`}
            className={type?.type.name ?? ''}
          >
            {type.type.name}
          </span>
        ))}
      </div>
      {!!pokemon?.sprites?.other?.['official-artwork'] && (
        <img
          src={pokemon?.sprites?.other?.['official-artwork'].front_default}
          alt={name}
        />
      )}
    </Link>
  )
}
