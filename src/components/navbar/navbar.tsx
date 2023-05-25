import { Box, Flex, Grid, NavLink } from 'theme-ui';
import { NavLink as NavLinkRouter, useNavigate } from 'react-router-dom';
import { SiPokemon } from 'react-icons/si';
import { FiTool } from 'react-icons/fi';
import { ImAngry } from 'react-icons/im';
import { useEffect, useState } from 'react';

export const Navbar = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        width: '100%',
        backgroundColor: 'white',
        position: 'fixed',
        bottom: [0, 'auto'],
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
          flexBasis: '100%',
          flexGrow: 1,
        }}
      >
        <NavLink
          href="#!"
          sx={{
            flex: '1',
            alignSelf: 'auto',
          }}
          onClick={() => navigate('/')}
          p={0}
          className={`home selected`}
        >
          <SiPokemon size={62} />
        </NavLink>

        <NavLink
          href="#!"
          onClick={() => navigate('/stack')}
          p={2}
          className={`stack selected`}
          sx={{
            flex: '1',
            alignSelf: 'auto',
          }}
        >
          <Flex
            sx={{
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 1,
            }}
          >
            <FiTool size={24} />
            Stack
          </Flex>
        </NavLink>

        <NavLink
          href="#!"
          p={2}
          onClick={() => navigate('/about')}
          className={`about selected`}
          sx={{
            flex: '1',
            alignSelf: 'auto',
          }}
        >
          <Flex
            sx={{
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 1,
            }}
          >
            <ImAngry size={24} />
            About Me
          </Flex>
        </NavLink>
      </Flex>
    </Box>
  );
};
