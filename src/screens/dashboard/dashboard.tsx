import React from 'react';
import { useCallback, useEffect, useState } from 'react';
import { Button, Flex, Grid, Spinner, Text } from 'theme-ui';
import {
  useGetPokemonsByQuery,
  useLazyGetPokemonsByQuery,
} from '../../services/pokemon-api';
import { PokemonCard } from '../../components/pokemon-card/pokemon-card';
import { useDispatch, useSelector } from 'react-redux';
import {
  dashboardSelector,
  actions as dashboardActions,
} from './dashboard-slice';

export function Dashboard() {
  const POKEMON_BACH = 20;
  const dispatch = useDispatch();
  const { pokemons, pokemonsLimit } = useSelector(dashboardSelector);

  const [lazyGetPokemons, { data, isLoading }] = useLazyGetPokemonsByQuery();

  //trigger getPokemonsByQuery
  useEffect(() => {
    console.log('pokemonsLimit', pokemonsLimit);
    lazyGetPokemons({ limit: pokemonsLimit });
  }, [pokemonsLimit]);

  //store pokemon data in store
  useEffect(() => {
    if (data) {
      dispatch(
        dashboardActions.setPokemons({
          pokemonList: data?.results,
        }),
      );
    }
  }, [data]);

  const scrollPokemonDashboard = useCallback(() => {
    // Get the distance scrolled from the top of the page
    const scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop;

    // Get the total height of the page
    const scrollHeight =
      document.documentElement.scrollHeight || document.body.scrollHeight;

    // If the user has scrolled to the bottom of the page
    if (scrollTop + window.innerHeight >= scrollHeight) {
      // Load the next batch of items
      !isLoading && dispatch(dashboardActions.setLimit(pokemonsLimit + 20));
    }
  }, [pokemonsLimit, isLoading]);

  const loadMore = useCallback(() => {
    dispatch(dashboardActions.setLimit(pokemonsLimit + 20));
    // Add a scroll event listener to the window
    window.addEventListener('scroll', scrollPokemonDashboard);
  }, [pokemonsLimit, scrollPokemonDashboard]);

  useEffect(
    () => () => {
      window.removeEventListener('scroll', scrollPokemonDashboard, false);
    },
    [],
  );

  return (
    <>
      <Text variant="text.heading">Pokedex</Text>
      <Grid
        sx={{
          gridTemplateColumns: ['repeat(3, 1fr)', 'repeat(4, 1fr)'],
          gap: '8px',
        }}
      >
        {pokemons?.pokemonList.map((pokemon) => (
          <PokemonCard key={pokemon.name} pokemon={pokemon} />
        ))}
      </Grid>
      <Flex sx={{ justifyContent: 'center', marginTop: '32px' }}>
        {pokemonsLimit === POKEMON_BACH && (
          <Button onClick={loadMore}>Cargar mas pokemon</Button>
        )}
        {pokemonsLimit !== POKEMON_BACH && <Spinner />}
      </Flex>
    </>
  );
}
