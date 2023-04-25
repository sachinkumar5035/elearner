import { Box, Button, Container, FormLabel, Heading, Input, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'




const Contact = () => {

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");

    return (
        <Container height={'90vh'}>
            <VStack>
                <Heading children="Contact Us" />
                <form >
                    <Box my={'4'}>
                        <FormLabel htmlFor='name' children="Name" />
                        <Input
                            required
                            id='name'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder='john'
                            type='text'
                            focusBorderColor='purple.400'
                        >
                        </Input>
                    </Box>
                    <Box my={'4'}>
                        <FormLabel htmlFor='email' children="Email address" />
                        <Input
                            required
                            id='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder='your Email'
                            type='email'
                            focusBorderColor='purple.400'
                        >
                        </Input>
                    </Box>

                    <Box my={'4'}>
                        <FormLabel htmlFor='message' children="Your message" />
                        <textarea
                            cols={'66'}
                            rows={'5'}
                            required
                            id='message'
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder='Enter your Message'
                            focusBorderColor='purple.400'
                            
                        >
                        </textarea>
                    </Box>
                    <Box alignItems={'center'} justifyContent={'center'} display={'flex'}>
                        <Button my={'4'} type='submit' colorScheme={'purple'} >Send mail</Button>
                    </Box>
                    <Box my={'4'}>
                        Request for a course <Link to={'/request'}><Button colorScheme='purple' variant={'link'}>click</Button>{" "}here</Link>
                    </Box>
                </form>

            </VStack>
        </Container>
    )
}

export default Contact
