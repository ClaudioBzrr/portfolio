'use client';

import { links } from '@/data/links';
import { Button, Heading, Stack } from '@chakra-ui/react';
import { usePathname, useRouter } from 'next/navigation';
export default function Header() {
  const router = useRouter();
  const pathName = usePathname();
  return (
    <Stack
      px={4}
      boxShadow={'lg'}
      h={'8vh'}
      direction={'row'}
      align={'center'}
      justify={'space-evenly'}
    >
      <Heading size={{ sm: 'lg', base: 'xs' }}>Claudio Bezerra</Heading>
      <Stack spacing={4} direction={'row'}>
        {links.map((link, index) => (
          <Button
            size={{ sm: 'md', base: 'sm' }}
            bg={pathName == link.path ? 'gray.200' : ''}
            variant={'ghost'}
            key={index}
            onClick={() => router.push(link.path)}
          >
            {link.title}
          </Button>
        ))}
      </Stack>
    </Stack>
  );
}