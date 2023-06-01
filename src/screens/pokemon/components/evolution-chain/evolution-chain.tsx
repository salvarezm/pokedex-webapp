import React from 'react';
import { Card, Flex } from 'theme-ui';
import { MdArrowForwardIos, MdKeyboardArrowDown } from 'react-icons/md';
import { PokemonCard } from '../../../../components/pokemon-card/pokemon-card';
import { useBreakpointIndex } from '@theme-ui/match-media';

interface EvolutionChainProps {
  chain?: Chain;
}

function getPokemonChain(chain: Chain) {
  const pokemonChain = [];
  let current = chain;

  while (current) {
    pokemonChain.push(current.species.name);
    current = current.evolves_to?.[0];
  }

  return pokemonChain;
}

export function EvolutionChain({ chain }: EvolutionChainProps) {
  const isMobile = useBreakpointIndex() === 0;
  if (!chain) {
    return null;
  }

  const pokemonChain = getPokemonChain(chain);

  return (
    <Card className="body_gray_bg">
      <Flex
        sx={{
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          flexDirection: isMobile ? 'column' : 'row',
        }}
      >
        {pokemonChain.map((pokemon, index) => (
          <>
            <PokemonCard pokemon={{ name: pokemon }} />
            {index < pokemonChain.length - 1 &&
              (isMobile ? (
                <MdKeyboardArrowDown size={52} />
              ) : (
                <MdArrowForwardIos size={52} />
              ))}
          </>
        ))}
      </Flex>
    </Card>
  );
}
