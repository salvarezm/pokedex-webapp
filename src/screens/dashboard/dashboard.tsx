import { useCallback, useEffect, useState } from 'react';
import {
  Button, Card, Flex, Link, Spinner, Text,
} from 'theme-ui';
import { useGetPokemonsByQuery } from '../../services/pokemon-api';
import { PokemonCard } from '../../components/pokemon-card/pokemon-card';

export function Dashboard() {
  const POKEMON_BACH = 20;
  const [limit, setLimit] = useState(POKEMON_BACH);

  const { data, isLoading } = useGetPokemonsByQuery({ limit });

  const scrollPokemonDashboard = useCallback(() => {
    // Get the distance scrolled from the top of the page
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

    // Get the total height of the page
    const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;

    // If the user has scrolled to the bottom of the page
    if (scrollTop + window.innerHeight >= scrollHeight) {
      // Load the next batch of items
      !isLoading && setLimit((prev) => prev + 20);
    }
  }, [setLimit, isLoading]);

  const loadMore = useCallback(() => {
    setLimit((prev) => prev + 20);
    // Add a scroll event listener to the window
    window.addEventListener('scroll', scrollPokemonDashboard);
  }, [setLimit, scrollPokemonDashboard]);

  useEffect(() => () => {
    window.removeEventListener('scroll', scrollPokemonDashboard, false);
  }, []);

  return (
    <>
      <Text variant="text.heading" sx={{ p: '28px' }}>
        Pokedex
      </Text>
      <Flex
        sx={{
          flexDirection: 'row',
          justifyContent: 'center',
          gap: '8px',
          flexWrap: 'wrap',
        }}
      >
        {data?.results.map((pokemon) => <PokemonCard key={pokemon.name} pokemon={pokemon} />)}
        <Flex>
          {limit === POKEMON_BACH && (
            <Button onClick={loadMore}>Cargar mas pokemon</Button>
          )}
          {limit !== POKEMON_BACH && <Spinner />}
        </Flex>
      </Flex>
    </>
  );
}
