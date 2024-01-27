import { Sidebar } from '@/components/Sidebar';
import About from '@/components/sections/About';
import Projects from '@/components/sections/Projects';
import Skills from '@/components/sections/Skills';
import { Grid, GridItem } from '@chakra-ui/react';

export default function Home() {
  return (
    <Grid
      maxW={'100vw'}
      w={'100%'}
      h={'100vh'}
      gridTemplateAreas={`"sidebar main"
                          "sidebar main"`}
      templateRows={'1fr'}
      templateColumns={'auto 1fr'}
    >
      <GridItem bg={'red'} area={'sidebar'}>
        <Sidebar />
      </GridItem>
      <GridItem bg={'blue'} area={'main'}>
        <About />
        <Skills />
        <Projects />
      </GridItem>
    </Grid>
  );
}
