import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { changePassword } from '../../redux/actions/profile';
import toast from 'react-hot-toast';
import { CLEAR_ERRORS, CLEAR_MESSAGE } from '../../redux/constants/userConstants';

const ChangePassword = () => {
    const [oldPassword,setOldPassword] = useState("");
    const [newPassword,setNewPassword] = useState("");
    const dispatch = useDispatch();
    const {loading,error,message} = useSelector(state=>state.profile);

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(changePassword(oldPassword,newPassword));
    }

    useEffect(() => {
      if(error){
        toast.error(error);
        dispatch({type:CLEAR_ERRORS});
      }
      if(message){
        toast.success(message);
        dispatch({type:CLEAR_MESSAGE});
      }
    }, [dispatch,error,message])
    


    return (
        <Container paddingY={'16'} minH={'90vh'}>
            <form onSubmit={submitHandler}>
                <Heading
                    textTransform={'uppercase'}
                    children="Change password"
                    textAlign={['center']}
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
                        <Button isLoading={loading} width={'full'} colorScheme='purple' type='submit'>change</Button>
                    </VStack>
            </form>
        </Container>
    )
}

export default ChangePassword
