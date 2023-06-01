import {
  Route,
  Routes,
  ScrollRestoration,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import { Dashboard } from './screens/dashboard/dashboard';
import { Layout } from './layout';
import { Pokemon } from './screens/pokemon/pokemon';
import { About } from './screens/about/about';
import { Stack } from './screens/stack/stack';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="pokemon/:pokemonName" element={<Pokemon />} />
        <Route path="about" element={<About />} />
        <Route path="stack" element={<Stack />} />

        {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. 
          <Route path="*" element={<NoMatch />} />*/}
      </Route>
    </Route>,
  ),
);
