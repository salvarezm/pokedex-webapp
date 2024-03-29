import { configureStore } from '@reduxjs/toolkit';
import { pokemonApi } from './services/pokemon-api';
import { reducer as DashboardReducer } from './screens/dashboard/dashboard-slice';

export const store = configureStore({
  reducer: {
    dashboard: DashboardReducer,
    [pokemonApi.reducerPath]: pokemonApi.reducer,
  },
  middleware: (getMiddle) => getMiddle().concat(pokemonApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
