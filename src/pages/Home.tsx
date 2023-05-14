import { Flex } from "@chakra-ui/react";
import { Header } from "../components/Header";

export function Home(){
    return(
        <Flex h={'100vh'} w={'100vw'} bg={'gray.200'}>
            <Header/>
        </Flex>
    )
}