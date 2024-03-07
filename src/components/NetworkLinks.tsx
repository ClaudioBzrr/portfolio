'use client';

import { networkLinks } from '@/data/network';
import { IconButton, Stack } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
export default function NetworkLinks() {
  const AnimatedIconButton = motion(IconButton);
  const router = useRouter();
  return (
    <Stack
      w={'100%'}
      direction={'row'}
      align={'center'}
      justify={'space-evenly'}
    >
      {networkLinks.map((link, index) => (
        <AnimatedIconButton
          _hover={{ color: 'blue.500' }}
          whileHover={{
            scale: [1.1, 1.8, 1.5],
            borderRadius: ['20%', '50%', '20%'],
            transition: { duration: 0.4, ease: 'easeInOut' },
          }}
          key={index}
          aria-label={link.name}
          icon={link.icon}
          onClick={() => router.push(link.link)}
        />
      ))}
    </Stack>
  );
}
