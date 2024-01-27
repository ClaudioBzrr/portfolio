'use client';

import {
  Avatar,
  Button,
  Heading,
  List,
  ListItem,
  Stack,
  Text,
} from '@chakra-ui/react';
import { BsLightningChargeFill } from 'react-icons/bs';
import { FaGear } from 'react-icons/fa6';
import { FaAddressBook } from 'react-icons/fa';

export function Sidebar() {
  return (
    <Stack direction={'column'} align={'center'} p={2}>
      <Stack align={`center`}>
        <Avatar
          borderWidth={'1px'}
          border={'black'}
          shadow={'lg'}
          size={'2xl'}
          name="Claudio Bezerra"
          src="https://avatars.githubusercontent.com/claudiobzrr"
        />
        <Stack>
          <Heading mt={4} textAlign={`center`} fontSize={`large`}>
            Claudio Bezerra
          </Heading>
          <Text fontStyle={`italic`} textAlign={'center'}>
            Desenvolvedor Fullstack
          </Text>
        </Stack>
      </Stack>
      <List spacing={2} mt={12}>
        <ListItem>
          <Button
            fontWeight={'medium'}
            fontSize={'large'}
            variant={'ghost'}
            justifyContent={'start'}
            w={'100%'}
            leftIcon={<FaAddressBook />}
          >
            Sobre mim
          </Button>
        </ListItem>
        <ListItem>
          <Button
            fontWeight={'medium'}
            fontSize={'large'}
            variant={'ghost'}
            justifyContent={'start'}
            w={'100%'}
            leftIcon={<BsLightningChargeFill />}
          >
            Skills
          </Button>
        </ListItem>
        <ListItem>
          <Button
            w={'100%'}
            fontWeight={'medium'}
            fontSize={'large'}
            variant={'ghost'}
            justifyContent={'start'}
            leftIcon={<FaGear />}
          >
            Projetos
          </Button>
        </ListItem>
      </List>
    </Stack>
  );
}
