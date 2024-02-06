'use client';

import { Stack } from '@chakra-ui/react';
import { motion } from 'framer-motion';

export default function Template({ children }: { children: React.ReactNode }) {
  const MotionStack = motion(Stack);
  return (
    <MotionStack
      initial={{ y: '50%' }}
      animate={{
        y: '0',
        duration: 2,
        ease: 'easeInOut',
        type: 'spring',
      }}
      m={'auto'}
      w={'100%'}
      minH={'100%'}
    >
      {children}
    </MotionStack>
  );
}
