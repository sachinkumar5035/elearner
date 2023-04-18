import React from 'react';
import {
    Box,
    Button,
    HStack,
    Heading,
    Image,
    Stack,
    Text,
    VStack,
} from '@chakra-ui/react';
import './home.css';
import { Link } from 'react-router-dom';
import vg from '../../assets/images/bg.png';
import { CgGoogle, CgYoutube } from "react-icons/cg";
import { SiCoursera, SiUdemy, SiUdacity } from "react-icons/si";
import { DiAws } from "react-icons/di";
import introVideo from '../../assets/videos/intro.mp4';



const Home = () => {
    return (
        <section className="home">
            <div className="container">
                <Stack
                    direction={['column', 'row']}
                    height="100%"
                    justifyContent={['center', 'space-between']}
                    alignItems="center"
                    spacing={['16', '56']}
                >
                    <VStack width={'full'} alignItems={['center', 'flex-end']} spacing={'8'}>
                        <Heading children="Learn from the best teachers" size={'2xl'} />
                        <Text textAlign={["center","left"]} children="find best courses at reasonable price" />
                        <Link to="/courses">
                            <Button size={'lg'} colorScheme="purple">
                                Explore courses
                            </Button>
                        </Link>
                    </VStack>
                    <Image
                        className='vector-graphics'
                        boxsize={'md'}
                        src={vg}
                        objectFit={'contain'}
                    />
                </Stack>
            </div>

            <Box padding={'8'} bg={'blackAlpha.800'}>
                <Heading textAlign={'center'}
                    fontFamily={'body'}
                    color={'purple.400'}
                    children="OUR BRANDS"
                />

                <HStack className='brandsBanner' justifyContent={'space-evenly'} marginTop={'4px'}>
                    <CgGoogle />
                    <CgYoutube />
                    <SiCoursera />
                    <SiUdemy />
                    <SiUdacity />
                    <DiAws />
                </HStack>  
            </Box>

            <div className="container2">
                <video
                    src={introVideo}
                    autoPlay
                    controls
                    controlsList='nodownload nofullscreen noremoteplayback'
                    disablePictureInPicture
                    disableRemotePlayback
                >

                </video>
            </div>



        </section>
    );
};

export default Home;
