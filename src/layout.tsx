import { Box } from 'theme-ui';
import { Navbar } from './components/navbar/navbar';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <>
      <Navbar />
      <Box
        className="pokedex_container"
        sx={{
          paddingTop: ['10px', '100px'],
          height: '100vh',
          maxWidth: '1200px',
          margin: '0 auto 0 auto',
          backgroundColor: 'white',
        }}
      >
        <Box
          sx={{
            maxWidth: '950px',
            margin: '0 auto 0 auto',
            padding: ['8px', '32px'],
            paddingBottom: ['70px', '50px'],
            backgroundColor: 'white',
          }}
        >
          <Outlet />
        </Box>
      </Box>
    </>
  );
};
