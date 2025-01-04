import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { updateProfile } from '../../redux/actions/profile';

const UpdateProfile = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(updateProfile(name, email));
    }

    return (
        <Container paddingY={'16'} minH={'90vh'}>
            <form onSubmit={submitHandler}>
                <Heading
                    textTransform={'uppercase'}
                    children="Update profile"
                    textAlign={['center']}
                    marginY={'16'}
                />
                <VStack
                    spacing={'8'}
                >
                    <Input
                        id="name"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        placeholder="Name"
                        type="text"
                        focusBorderColor="purple.400"
                    ></Input>
                    <Input
                        id="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        placeholder="Email"
                        type="email"
                        focusBorderColor="purple.400"
                    ></Input>

                    <Button width={'full'} colorScheme='purple' type='submit'>Update</Button>
                </VStack>


            </form>
        </Container>
    )
}

export default UpdateProfile
