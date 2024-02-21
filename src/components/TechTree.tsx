'use client';

import { technologies } from '@/data/technologies';
import { List, ListIcon, ListItem, Stack } from '@chakra-ui/react';

export default function TechTree() {
  return (
    <Stack
      w={'100%'}
      h={'100%'}
      spacing={8}
      p={{ sm: 20, base: 4 }}
      direction={'column'}
      align={'start'}
      justify={'center'}
    >
      <List>
        {technologies.map((tech, index) => (
          <ListItem key={index}>
            <ListIcon w={'100%'} h={'100%'}>
              {tech.icon}
            </ListIcon>
          </ListItem>
        ))}
      </List>
    </Stack>
  );
}
