import { Box, Button, Grid, HStack, Heading, Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import React from 'react'
import Sidebar from '../Dashboard/Sidebar'
import { RiDeleteBin7Fill } from 'react-icons/ri';


const Users = () => {

    const users = [{
        _id: "sample id",
        name: "sample name",
        email: "sample email",
        role: "sample role",
        subscription: {
            status: "active"
        }
    }];

    const updateUserHandler = (userId) =>{
        console.log(userId);
        // alert(userId);
    }

    const deleteUserHandler = (userId)=>{
        console.log(userId);
        // alert(userId);
    }

    return (
        <Grid minH={'100vh'} templateColumns={['1fr', '5fr 1fr']}>
            <Box
                padding={['0', '16']}
                overflow={'auto'}
            >
                <Heading textTransform={'uppercase'} textAlign={['center', 'left']} marginY={'16'}>
                    ALl Users
                </Heading>
                <TableContainer width={['100vw', 'full']}>
                    <Table variant={'simple'} size={'lg'}>
                        <TableCaption>
                            All available users
                        </TableCaption>
                        <Thead>
                            <Tr>
                                <Th>Id</Th>
                                <Th>Name</Th>
                                <Th>Email</Th>
                                <Th>Role</Th>
                                <Th>Subscription</Th>
                                <Th isNumeric>Action</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {
                                users.map(item => (
                                    <Row key={item._id} item={item} updateUserHandler={updateUserHandler} deleteUserHandler={deleteUserHandler} />
                                ))
                            }
                        </Tbody>
                    </Table>
                </TableContainer>
            </Box>
            <Sidebar />
        </Grid>
    )
}

export default Users;


function Row({ item, updateUserHandler, deleteUserHandler }) {
    return (
        <Tr>
            <Td>#{item._id}</Td>
            <Td>{item.name}</Td>
            <Td>{item.email}</Td>
            <Td>{item.role}</Td>
            <Td>{item.subscription.status === 'active' ? "active" : "not active"}</Td>
            <Td isNumeric>
                <HStack justifyContent={'flex-end'}>
                    <Button
                        onClick={() => updateUserHandler(item._id)}
                        variant={'outline'}
                        color={'purple.400'}
                    >
                        Change Role
                    </Button>
                    <Button
                        onClick={() => deleteUserHandler(item._id)}
                        color={'purple.600'}
                    >
                        <RiDeleteBin7Fill />
                    </Button>
                </HStack>
            </Td>
        </Tr>
    )
}