import { Box, Flex, IconButton, Link, Stack, useColorMode} from "@chakra-ui/react";
import { Link as ReactLink } from "react-router-dom";
import {BsMoonStarsFill,BsSunFill} from 'react-icons/bs'



export function Header(){
    const {colorMode,toggleColorMode} = useColorMode()

    return(
        <Flex w={'100vw'} h={'7vh'} position={'fixed'} top={0}>
            <Box w={'100%'} h={'100%'} boxShadow={'lg'}>
                <Stack direction={"row"} justify={'center'} w={'100%'} h={'100%'} align={'center'}>
                    <Stack w={'40%'} h={'100%'} direction={"row"} align={'center'} justify={'center'}>
                        <Link as={ReactLink} to={'/about'}>Sobre</Link>
                        <Link as={ReactLink} to={'/skills'}>Habilidades</Link>
                        <Link as={ReactLink} to={'/contact'}>Contato</Link>
                    </Stack>
                    <Stack align={'center'} justify={'center'}>
                        <IconButton
                            onClick={toggleColorMode} 
                            aria-label="color-mode toggler"
                            icon={ colorMode == 'dark' ? <BsSunFill/> : <BsMoonStarsFill/>}
                        />
                    </Stack>
                </Stack>
            </Box>
        </Flex>
    )
}