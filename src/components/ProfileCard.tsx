'use client';

import { Avatar, Heading, Stack, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
export default function ProfileCard() {
  const AnimatedStack = motion(Stack);
  return (
    <AnimatedStack
      whileHover={{
        scale: 1.05,
        transition: { duration: 1, ease: 'easeInOut' },
      }}
      p={4}
      w={'100%'}
      direction={'row'}
      align={'center'}
    >
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
    </AnimatedStack>
  );
}
