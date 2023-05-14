import { Box, Flex, Link, Stack } from "@chakra-ui/react";
import { Link as ReactLink } from "react-router-dom";
import { header } from "../language/header";

export function Header(){
    return(
        <Flex w={'100vw'} h={'7vh'} position={'fixed'} top={0}>
            <Box w={'100%'} h={'100%'} boxShadow={'lg'}>
                <Stack direction={"row"} justify={'center'} w={'100%'} h={'100%'} align={'center'}>
                    <Stack w={'40%'} h={'100%'} direction={"row"} align={'center'} justify={'center'}>
                        <Link as={ReactLink} to={'/about'}>{header.portuguese.aboutLink}</Link>
                        <Link as={ReactLink} to={'/skills'}>{header.portuguese.skillsLink}</Link>
                        <Link as={ReactLink} to={'/contact'}>{header.portuguese.contactLink}</Link>
                    </Stack>
                </Stack>
            </Box>
        </Flex>
    )
}