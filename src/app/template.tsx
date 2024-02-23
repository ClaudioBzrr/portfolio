'use client';

import { Stack } from '@chakra-ui/react';
import { motion } from 'framer-motion';

export default function Template({ children }: { children: React.ReactNode }) {
  const MotionStack = motion(Stack);
  return (
    <MotionStack
      initial={{ x: '30px', opacity: 0 }}
      animate={{
        x: '0',
        opacity: 1,
        ease: 'easeInOut',
        type: 'spring',
        transition: { duration: 0.5 },
      }}
      m={'auto'}
      w={'100%'}
      minH={'100%'}
    >
      {children}
    </MotionStack>
  );
}
