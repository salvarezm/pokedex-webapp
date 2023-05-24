import { Box, Flex, Grid, Text } from 'theme-ui';
import capiFace from '../../assets/images/capybara-square-1-400x400.jpg';

export function About() {
  return <>
    <h1>About</h1>
    <Box>
      <Grid sx={{gap: 2, gridTemplateColumns: '1fr 1fr'}}>
        <Box>
          <img src={capiFace} alt="Capybara face" style={{width: '100%'}} />
        </Box>
        <Flex sx={{flexDirection: 'column', gap: 2}}>
          <Text>I'm a capibara</Text>
          <Text>See more <a href='https://salvarezm.github.io/'>salvarezm.github.io/</a></Text>
        </Flex>
      </Grid>
      
    </Box>
  </>;
}
