import { Avatar, Heading, Stack, Text } from '@chakra-ui/react';

export default function ProfileCard() {
  return (
    <Stack w={'100%'} direction={'row'} align={'center'}>
      <Avatar
        size={{ sm: '2xl', base: 'xl' }}
        name="Claudio Bezerra"
        src="https://github.com/claudiobzrr.png"
      />
      <Stack>
        <Heading size={{ sm: 'md', base: 'xs' }}>Claudio Bezerra</Heading>
        <Text size={{ sm: 'md', base: 'xs' }} color={'gray.500'}>
          Fullstack Developer
        </Text>
      </Stack>
    </Stack>
  );
}