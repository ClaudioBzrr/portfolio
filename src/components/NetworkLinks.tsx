'use client';

import { networkLinks } from '@/data/network';
import { IconButton, Stack } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
export default function NetworkLinks() {
  const router = useRouter();
  return (
    <Stack
      w={'100%'}
      direction={'row'}
      align={'center'}
      justify={'space-evenly'}
    >
      {networkLinks.map((link, index) => (
        <IconButton
          key={index}
          aria-label={link.name}
          icon={link.icon}
          onClick={() => router.push(link.link)}
        />
      ))}
    </Stack>
  );
}