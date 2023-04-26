import { Box, Button, Container, Heading, Text, VStack } from '@chakra-ui/react';
import React from 'react';

const Subscribe = () => {
    return (
        <Container h={'90vh'} p={'8'}>
            <Heading children="Welcome" my={'8'} textAlign={'center'} />
            <VStack
                boxShadow={'lg'}
                alignItems={'stretch'}
                borderRadius={'lg'}
                spacing={'0'}
            >
                <Box bg={'purple.400'} p={'4'} css={{ borderRadius: '8px 8px 0 0' }}>
                    <Text color="black" children="Premium pack - ₹299" />
                </Box>
                <Box p={'4'} >
                    <VStack textAlign={'center'} px={'8'} mt={'4'} spacing={'8'}>
                        <Text
                            children="Subscribe to get acceess to premium courses"
                        />
                        <Heading size={'md'} children='₹299 only' />
                    </VStack>
                    <Button
                        marginY={'4'}
                        width={'full'}
                        colorScheme='purple'
                    >
                        Subscribe Now
                    </Button>
                </Box>
                <Box bg={'blackAlpha.600'} padding={'4'} css={{borderRadius:'0 0 8px 8px'}}>
                <Heading color={'white'} size={'sm'} textTransform={'uppercase'} children='100% refund at cancellation' />
                <Text children="*Terms and Conditions apply." size={'xs'} color={'white'}/>
                </Box>
            </VStack>
        </Container>
    );
};

export default Subscribe;
