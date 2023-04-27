import {
  Avatar,
  Box,
  Button,
  Container,
  HStack,
  Heading,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import profile from '../../assets/images/profile.png';
import { Link } from 'react-router-dom';
import introVideo from '../../assets/videos/challa.mp4';
import { RiSecurePaymentFill } from 'react-icons/ri';
import termsAndCondition from '../../assets/docs/TermsAndConditions.js';

const Founder = () => {
  return (
    <Stack direction={['column', 'row']} spacing={['4', '16']} padding={'8'}>
      <VStack>
        <Avatar src={profile} boxSize={['40', '48']} />
        <Text children="Co-Founder" opacity={'.5'} />
      </VStack>
      <VStack justifyContent={'center'} alignItems={['center', 'flex-start']}>
        <Heading children="Sachin Kumar" size={['md', 'xl']} />
        <Text children="Hi, I am a full stack web-developer. I have graduated from National Institute of Technology Agartala Tripura in 2021. I am working in TCS as System Engineer since July 2021." />
      </VStack>
    </Stack>
  );
};

const VideoPlayer = () => {
  return (
    <Box>
      <video
        src={introVideo}
        autoPlay
        controls
        controlsList="nodownload nofullscreen noremoteplayback"
        disablePictureInPicture
        disableRemotePlayback
      ></video>
    </Box>
  );
};

const TandC = ({ termsAndCondition }) => (
  <Box>
    <Heading
      size={'md'}
      textAlign={['center', 'left']}
      children="Terms & Conditions"
      my={'4'}
    />
    <Box overflowY={'scroll'} h={'xs'} p={'4'}>
      <Text
        textAlign={['center', 'left']}
        letterSpacing={'widest'}
        fontFamily={'heading'}
        overflowY={'scroll'}
      >
        {termsAndCondition}
      </Text>

      <Heading
        my={'4'}
        size={'xs'}
        children="Refund only applicable on cancellation within 7 days."
      />
    </Box>
  </Box>
);

const About = () => {
  return (
    <Container maxW={'container.lg'} boxShadow={'lg'} padding={'14'}>
      <Heading children="Abour us" textAlign={['center', 'left']} />
      <Founder />
      <Stack m={'8'} direction={['column', 'row']} alignItems="center">
        <Text fontFamily={'sans-serif'}>
          We are online learning plateform with some premium courses.
        </Text>
        <Link to={'/subscribe'}>
          <Button colorScheme="purple">Check Out our plans</Button>
        </Link>
      </Stack>
      <VideoPlayer />

      <TandC termsAndCondition={termsAndCondition} />

      <HStack m={'4'} padding={'4'}>
        <RiSecurePaymentFill />
        <Heading
          size={'xs'}
          textTransform={'uppercase'}
          children="Your payment is secured by razorpay"
        />
      </HStack>
    </Container>
  );
};

export default About;
