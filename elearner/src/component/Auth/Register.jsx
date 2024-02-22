import {
  Avatar,
  Box,
  Button,
  Container,
  FormLabel,
  Heading,
  Input,
  VStack,
  form,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {useDispatch} from 'react-redux';
import { register } from '../../redux/actions/userAction';


export const fileUploadCSS = {
  cursor: 'pointer',
  margin: 'auto',
  width: '110%',
  height: '100%',
  border: 'none',
  color: 'purple',
  backgroundColor: 'white',
};

const fileUploadStyle = {
  '&::file-selector-button': fileUploadCSS,
};

const Register = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [imagePrev, setImagePrev] = useState('');
  const [image, setImage] = useState('');

  const dispatch  = useDispatch();



  const imageChangeHandler = e => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImagePrev(reader.result);
      setImage(file);
    };
  };

  const submitHandler = (e)=>{
    e.preventDefault();
    const myForm = new FormData();
    myForm.append("name",name);
    myForm.append("email",email);
    myForm.append("password",password);
    myForm.append("file",image); // because in backend we have fetched it as name file 
    dispatch(register(myForm)); // this form data will be passed to register function of frontend it will be received as formdata .
  }

  return (
    <Container h={'95vh'}>
      <VStack h={'full'} justifyContent={'center'} spacing={'14'}>
        <Heading textTransform={'uppercase'} children="Registration" />
        <form onSubmit={submitHandler}>
          <Box my={'4'} display={'flex'} justifyContent={'center'}>
            <Avatar src={imagePrev} size={'2xl'} />
          </Box>

          <Box my={'4'}>
            <FormLabel htmlFor="name" children="Name" />
            <Input
              required
              id="name"
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="John"
              type="text"
              focusBorderColor="purple.400"
            ></Input>
          </Box>
          <Box my={'4'}>
            <FormLabel htmlFor="email" children="Email address" />
            <Input
              required
              id="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="abc@gmail.com"
              type="email"
              focusBorderColor="purple.400"
            ></Input>
          </Box>
          <Box my={'4'}>
            <FormLabel htmlFor="password" children="Password" />
            <Input
              required
              id="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="your password"
              type="password"
              focusBorderColor="purple.400"
            ></Input>
          </Box>
          <Box my={'4'}>
            <FormLabel htmlFor="chooseAvatar" children="Choose Avatar" />
            <Input
              required
              id="chooseAvatar"
              type="file"
              accept="image/*"
              focusBorderColor="purple.400"
              css={fileUploadStyle}
              onChange={imageChangeHandler}
            ></Input>
          </Box>

          <Button my={'4'} type="submit" colorScheme={'purple'}>
            Sign Up
          </Button>
          <Box my={'4'}>
            Already signed up?{' '}
            <Link to={'/login'}>
              <Button colorScheme="purple" variant={'link'}>
                Login
              </Button>{' '}
              here
            </Link>
          </Box>
        </form>
      </VStack>
    </Container>
  );
};

export default Register;