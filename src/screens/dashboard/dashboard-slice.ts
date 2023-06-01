import { createDraftSafeSelector, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store';

interface Pokemons {
  pokemonList: PokemonListResult[];
}

interface DashboardSliceState {
  pokemons: Pokemons;
  pokemonsLimit: number;
}

const initialState: DashboardSliceState = {
  pokemonsLimit: 20,
  pokemons: {
    pokemonList: [],
  },
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setPokemons(state, action: PayloadAction<Pokemons>) {
      state.pokemons = action.payload;
    },
    setLimit(state, action: PayloadAction<number>) {
      state.pokemonsLimit += 20;
    },
  },
});

const selectSelf = (state: RootState): DashboardSliceState => state.dashboard;

export const dashboardSelector = createDraftSafeSelector(
  selectSelf,
  (state: DashboardSliceState): DashboardSliceState => state,
);

export const { name, actions, reducer } = counterSlice;
