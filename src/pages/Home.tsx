import { Box, Flex, Stack, useColorModeValue } from "@chakra-ui/react";
import { Header } from "../components/Header";

export function Home(){
    return(
        <Flex h={'100vh'} w={'100vw'} bg={useColorModeValue('gray.200','blackAlpha.800')}>
            <Stack h={'100%'} w={'100%'}>
                <Header/>
                <Stack align={'center'} justify={'center'}  w={'100%'} h={'100%'}>
                    <Box rounded={'xl'}  backdropFilter={'blur(50px)'} maxW={'90%'} w={'5xl'} h={'xl'} boxShadow={'lg'} bg={useColorModeValue('gray.100','blackAlpha.400')}>

                    </Box>
                </Stack>
            </Stack>
        </Flex>
    )
}