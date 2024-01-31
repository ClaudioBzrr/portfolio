'use client';

import { Button, Heading, Stack } from '@chakra-ui/react';
import { usePathname, useRouter } from 'next/navigation';
export default function Header() {
  const router = useRouter();
  const pathName = usePathname();
  return (
    <Stack
      boxShadow={'lg'}
      h={'8vh'}
      direction={'row'}
      align={'center'}
      justify={'space-evenly'}
    >
      <Heading>Claudio Bezerra</Heading>
      <Stack direction={'row'}>
        <Button
          onClick={() => router.push('/')}
          bg={pathName == '/' ? 'gray.200' : ''}
          variant={'ghost'}
        >
          Sobre
        </Button>
        <Button
          onClick={() => router.push('/skills')}
          bg={pathName == '/skills' ? 'gray.200' : ''}
          variant={'ghost'}
        >
          Tecnologias
        </Button>
        <Button
          onClick={() => router.push('/projects')}
          bg={pathName == '/projects' ? 'gray.200' : ''}
          variant={'ghost'}
        >
          Projetos
        </Button>
      </Stack>
    </Stack>
  );
}
