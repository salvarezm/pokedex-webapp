/** @jsxImportSource theme-ui */
import React from 'react';
import { getColor, lighten } from '@theme-ui/color';
import { Box, Card, Text, Flex, ThemeUICSSObject } from 'theme-ui';
import { theme } from '../../../../shared/theme';

interface BasePointsProps {
  stats?: Stat[];
}

const liStyle: ThemeUICSSObject = {
  position: 'relative',
  backgroundColor: 'transparent',
  borderBottom: '5px solid black',
  borderColor: lighten('gray', 0.1),
  height: '8px',
  listStyle: 'none',
  width: '60px',
  zIndex: 3,
};

const basePointsMap = new Map();
basePointsMap.set('hp', 'HP');
basePointsMap.set('attack', 'ATK');
basePointsMap.set('defense', 'DEF');
basePointsMap.set('special-attack', 'S. ATK');
basePointsMap.set('special-defense', 'S. DEF');
basePointsMap.set('speed', 'SPD');

export function BasePoints({ stats = [] }: BasePointsProps) {
  return (
    <Card
      variant="pokeBasePoints"
      sx={{ position: 'relative', padding: 4, paddingTop: 2 }}
    >
      <Flex sx={{ flexDirection: 'column', gap: 4 }}>
        <Text variant="labelHeading">Base Points</Text>
        <Flex
          sx={{
            flexDirection: 'row',
            gap: 10,
            justifyContent: 'space-between',
          }}
        >
          {stats?.map((stat, index) => (
            <Flex key={stat.stat.name} sx={{ flexDirection: 'column' }}>
              <ul
                style={{
                  overflow: 'hidden',
                  margin: 0,
                  padding: 0,
                  position: 'relative',
                  backgroundColor: getColor(theme, 'primary'),
                  width: '60px',
                }}
              >
                <li
                  sx={{
                    ...liStyle,
                    backgroundColor: 'white',
                    position: 'absolute',
                    listStyleType: 'none',
                    height: '100%',
                    bottom: `${stat.base_stat}%`,
                    zIndex: 1,
                  }}
                />
                <li sx={liStyle} />
                <li sx={liStyle} />
                <li sx={liStyle} />
                <li sx={liStyle} />
                <li sx={liStyle} />
                <li sx={liStyle} />
                <li sx={liStyle} />
                <li sx={liStyle} />
                <li sx={liStyle} />
                <li sx={liStyle} />
                <li sx={liStyle} />
                <li sx={liStyle} />
                <li sx={liStyle} />
                <li sx={liStyle} />
                <li sx={liStyle} />
                <li sx={liStyle} />
              </ul>
              {basePointsMap.get(stat.stat.name.toString())}
            </Flex>
          ))}
        </Flex>
      </Flex>
    </Card>
  );
}
