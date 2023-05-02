import { Box, Flex, Grid, NavLink } from 'theme-ui';
import { SiPokemon } from 'react-icons/si';
import { FiTool } from 'react-icons/fi';
import { ImAngry } from 'react-icons/im';
import { useEffect, useState } from 'react';

export const Navbar = () => {
  const [actual, setActual] = useState('');

  useEffect(() => {
    const url = window.location.href;
    if (url.includes('pokemon')) {
      setActual('home');
    }
  }, []);

  return (
    <Box
      sx={{
        width: '100%',
        height: '100px',
        backgroundColor: 'white',
        position: 'fixed',
        zIndex: 10,
      }}
    >
      <Flex
        as="nav"
        sx={{
          margin: '0 auto',
          maxWidth: '960px',
          height: '100%',
          alignItems: 'center',
        }}
      >
        <NavLink
          href="#!"
          p={2}
          className={`home ${actual === 'home' && 'selected'}`}
        >
          <SiPokemon size={62} />
          Inicio
        </NavLink>
        <NavLink href="#!" p={2}>
          <FiTool size={32} />
          Stack
        </NavLink>
        <NavLink href="#!" p={2}>
          <ImAngry size={32} />
          About Me
        </NavLink>
      </Flex>
    </Box>
  );
};
