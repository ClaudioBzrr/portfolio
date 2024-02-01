import NetworkLinks from '@/components/NetworkLinks';
import ProfileCard from '@/components/ProfileCard';
import { Stack, Text } from '@chakra-ui/react';
export default function Home() {
  return (
    <Stack
      direction={'row'}
      align={'center'}
      justify={'center'}
      h={'100%'}
      w={'100%'}
    >
      <Stack
        rounded={'lg'}
        mx={'auto'}
        p={{ sm: 20, base: 20 }}
        boxShadow={'lg'}
      >
        <ProfileCard />
        <Stack mt={12}>
          <Text
            size={{ sm: 'md', base: 'xs' }}
            fontFamily={'heading'}
          >{`Atuo como desenvolvedor Full Stack há ${
            new Date().getFullYear() - 2020
          } anos e sou formado em Análise e Desenvolvimento de sistemas pela Fatene`}</Text>
          <Text>
            Durante esse tempo, pude aprender fortes conceitos sobre
            desenvolvimento e engenharia de software
          </Text>
          <Stack mt={12}>
            <NetworkLinks />
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}
