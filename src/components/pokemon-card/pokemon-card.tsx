import React, { useState, useEffect } from 'react';
import { Badge, Box, Card, Flex, Text } from 'theme-ui';
import { useNavigate } from 'react-router-dom';
import { useGetPokemonByNameQuery } from '../../services/pokemon-api';

export interface PokemonCardProps {
  pokemon: PokemonListResult;
}

export function PokemonCard({ pokemon: { name } }: PokemonCardProps) {
  const { data } = useGetPokemonByNameQuery(name);
  const [idImage, setIdImage] = useState('');

  const navigate = useNavigate();

  const handlePokemonClick = () => {
    navigate(`/pokemon/${name}`);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    if (data) {
      const imgCode =
        data.id && data.id.toString().length <= 3
          ? `000${data?.id}`.slice(-3)
          : data?.id.toString();

      setIdImage(imgCode);
    }
  }, [data]);

  return (
    <Card key={`${name}`} variant="pokecard" onClick={handlePokemonClick}>
      <Flex sx={{ flexDirection: 'column' }}>
        <Card variant="pokeImg" sx={{ width: ['100px', '205px'], height: ['100px', '205px'] }}>
          <img
            style={{width: '100%', height: '100%'}}
            src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${idImage}.png`}
          />
        </Card>
        <Box>
          N*
          {idImage}
        </Box>
        <Text variant="text.subheading">
          {name.charAt(0).toUpperCase() + name.slice(1)}
        </Text>

        <Flex sx={{ flexDirection: 'row', gap: '8px' }}>
          {data?.types.map((item) => (
            <Badge variant={item.type.name} key={item.type.name}>
              {item.type.name}
            </Badge>
          ))}
        </Flex>
      </Flex>
    </Card>
  );
}
