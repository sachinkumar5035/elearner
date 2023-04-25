import { Box, Button, Container, FormLabel, Heading, Input, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'




const Request = () => {

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [course, setCourse] = useState("");

    return (
        <Container height={'86vh'}>
            <VStack my={'6'}>
                <Heading children="Request New Course" />
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
                        <FormLabel htmlFor='course' children="Course name" />
                        <textarea
                            cols={'66'}
                            rows={'5'}
                            required
                            id='course'
                            value={course}
                            onChange={(e) => setCourse(e.target.value)}
                            placeholder='Enter course name'
                            focusBorderColor='purple.400'
                            
                        >
                        </textarea>
                    </Box>
                    <Box alignItems={'center'} justifyContent={'center'} display={'flex'}>
                        <Button my={'4'} type='submit' colorScheme={'purple'} >Send mail</Button>
                    </Box>
                    <Box my={'4'}>
                        See available courses! <Link to={'/courses'}><Button colorScheme='purple' variant={'link'}>click</Button>{" "}here</Link>
                    </Box>
                </form>

            </VStack>
        </Container>
    )
}

export default Request
