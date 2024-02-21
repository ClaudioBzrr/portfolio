'use client';

import { Stack } from '@chakra-ui/react';
import { Providers } from './providers';
import Header from '@/components/Header';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" translate="no">
      <body>
        <Providers>
          <Stack maxW={'100vw'} minH={'100vh'}>
            <Stack
              zIndex={'dropdown'}
              backdropFilter={'blur(5px)'}
              position={'fixed'}
              w={'100%'}
              h={'auto'}
            >
              <Header />
            </Stack>
            <Stack m={'auto'} w={'100%'} minH={'100%'}>
              {children}
            </Stack>
          </Stack>
        </Providers>
      </body>
    </html>
  );
}
