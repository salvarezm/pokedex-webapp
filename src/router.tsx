import { Route, Routes } from 'react-router-dom';
import { Dashboard } from './screens/dashboard/dashboard';
import { Layout } from './layout';
import { Pokemon } from './screens/pokemon/pokemon';
import { About } from './screens/about/about';

export const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="pokemon/:pokemonName" element={<Pokemon />} />
          <Route path="about" element={<About />} />

          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. 
          <Route path="*" element={<NoMatch />} />*/}
        </Route>
      </Routes>
    </>
  );
};
