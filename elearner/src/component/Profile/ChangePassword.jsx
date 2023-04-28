import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'

const ChangePassword = () => {
    const [oldPassword,setOldPassword] = useState("");
    const [newPassword,setNewPassword] = useState("");
    return (
        <Container paddingY={'16'} minH={'90vh'}>
            <form>
                <Heading
                    textTransform={'uppercase'}
                    children="Change password"
                    textAlign={['center', 'left']}
                    marginY={'16'}
                />
                    <VStack
                        spacing={'8'}
                    >
                        <Input
                            required
                            id="oldPassword"
                            value={oldPassword}
                            onChange={e => setOldPassword(e.target.value)}
                            placeholder="Old password"
                            type="password"
                            focusBorderColor="purple.400"
                        ></Input>
                        <Input
                            required
                            id="newPassword"
                            value={newPassword}
                            onChange={e => setNewPassword(e.target.value)}
                            placeholder="New password"
                            type="password"
                            focusBorderColor="purple.400"
                        ></Input>
                        <Button width={'full'} colorScheme='purple' type='submit'>change</Button>
                    </VStack>

                
            </form>
        </Container>
    )
}

export default ChangePassword
