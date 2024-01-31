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
      <Stack p={16} boxShadow={'lg'}>
        <Text>
          Olá meu nome é Claudio Bezerra,e sou um desenvolvedor Fullstack
        </Text>
      </Stack>
    </Stack>
  );
}
