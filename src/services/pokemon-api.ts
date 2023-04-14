import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


// Define a service using a base URL and expected endpoints
export const pokemonApi = createApi({
    reducerPath: 'pokemonApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
    endpoints: (builder) => ({
        getPokemonsBy: builder.query<PokemonList, PokemonListRequest>({
            query: ({limit = 20}) => ({
                url: `pokemon/`,
                method: 'GET',
                params: {limit},
            }),
            
        }),
        getPokemonByName: builder.query<Pokemon, string>({
            query: (name) => `pokemon/${name}`,
        }),
        getPokemonSpecies: builder.query<PokemonSpecies, number | undefined>({
            query: (id) => `pokemon-species/${id}`,
        }),
        getEvolutionChain: builder.query<EvolutionChain, string>({
            query: (id) => `evolution-chain/${id}`,
        }),
    }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { 
    useGetPokemonsByQuery, 
    useGetPokemonByNameQuery, 
    useGetPokemonSpeciesQuery,
    useGetEvolutionChainQuery,
} = pokemonApi