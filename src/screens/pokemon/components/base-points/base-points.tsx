/** @jsxImportSource theme-ui */
import { getColor, lighten } from "@theme-ui/color";
import { Box, Card, Text, Flex, ThemeUICSSObject } from "theme-ui";
import { theme } from "../../../../shared/theme";

interface BasePointsProps {
    stats?: Stat[];
}

const liStyle: ThemeUICSSObject = {
    position: 'relative',
    backgroundColor: 'transparent',
    borderBottom: `3px solid black`,
    borderColor: lighten('gray', 0.1),
    height: '8px',
    listStyle: 'none',
    width: '40px',
    zIndex: 3,
}

const basePointsMap = new Map();
basePointsMap.set('hp', 'HP');
basePointsMap.set('attack', 'ATK');
basePointsMap.set('defense', 'DEF');
basePointsMap.set('special-attack', 'S. ATK');
basePointsMap.set('special-defense', 'S. DEF');
basePointsMap.set('speed', 'SPD');




export const BasePoints = ({ stats = [] } : BasePointsProps) => {
    return <Card variant='pokeBasePoints' sx={{ position: 'relative' }}>
        <Box>
            <Text variant='labelHeading'>Base Points</Text>
            <Flex sx={{ flexDirection: 'row', gap: 10 }}>
                {
                    stats?.map((stat, index) => (
                        <Flex key={stat.stat.name} sx={{ flexDirection: 'column' }} >
                            <ul style={{ overflow: 'hidden', margin: 0, padding: 0, position: 'relative', backgroundColor: getColor(theme, 'primary'), width: '40px' }}>
                                <li sx={{
                                    ...liStyle,
                                    backgroundColor: 'white',
                                    position: 'absolute',
                                    listStyleType: 'none',
                                    height: '100%',
                                    bottom: `${stat.base_stat}%`,
                                    zIndex: 1,
                                }}></li>
                                <li sx={liStyle}></li>
                                <li sx={liStyle}></li>
                                <li sx={liStyle}></li>
                                <li sx={liStyle}></li>
                                <li sx={liStyle}></li>
                                <li sx={liStyle}></li>
                                <li sx={liStyle}></li>
                                <li sx={liStyle}></li>
                                <li sx={liStyle}></li>
                                <li sx={liStyle}></li>
                                <li sx={liStyle}></li>
                                <li sx={liStyle}></li>
                                <li sx={liStyle}></li>
                                <li sx={liStyle}></li>
                                <li sx={liStyle}></li>
                                <li sx={liStyle}></li>
                            </ul>
                            {basePointsMap.get(stat.stat.name.toString())}
                        </Flex>
                    ))
                }
            </Flex>

        </Box>
    </Card>;
};