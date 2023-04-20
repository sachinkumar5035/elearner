import { Box, HStack, Heading, Stack, VStack } from '@chakra-ui/react'
import React from 'react'
import {TiSocialLinkedinCircular} from "react-icons/ti"
import {DiGithub} from "react-icons/di";


const Footer = () => {
    return (
        <Box padding={'4'} bg={'blackAlpha.900'} minH={'10vh'}>
        <Stack direction={['column','row']}>
            <VStack alignItems={['center','flex-start']} width={'full'} >
                <Heading children="All rights reserved" color={'white'}/>
                <Heading children="@E-Learner 2023" color={'white'} size={'sm'}/>
            </VStack>

            <HStack spacing={['2','4']} justifyContent={'center'} color={'white'} fontSize={'50'}>
                <a href="https://www.linkedin.com/in/sachin-kumar-2b6354194/" target='blank'>
                    <TiSocialLinkedinCircular />
                </a>
                <a href="https://github.com/sachinkumar5035" target='blank'>
                    <DiGithub/>
                </a>
            </HStack>
        </Stack>    

        </Box>
    )
}

export default Footer
