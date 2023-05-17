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
          maxWidth: '1200px',
          margin: '0 auto 50px auto',
          backgroundColor: 'white',
        }}
      >
        <Box
          sx={{
            maxWidth: '950px',
            margin: '0 auto 50px auto',
            paddingBottom: '50px',
            backgroundColor: 'white',
          }}
        >
          <Outlet />
        </Box>
      </Box>
    </>
  );
};
