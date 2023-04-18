import React from 'react';
import { ColorModeSwitcher } from '../../../ColorModeSwitcher.js';
import {
    Button,
    Drawer,
    DrawerBody,
    DrawerContent,
    DrawerHeader,
    DrawerOverlay,
    HStack,
    VStack,
    useDisclosure,
} from '@chakra-ui/react';
import {
    RiDashboardFill,
    RiLogoutBoxFill,
    RiMenu5Fill,
} from 'react-icons/ri';
import { Link } from 'react-router-dom';

const Header = () => {
    const { onClose, isOpen, onOpen } = useDisclosure();

    const LinkButton = ({ url = '/', title = 'Home' }) => (
        <Link to={url}>
            <Button variant={'ghost'}>{title}</Button>
        </Link>
    );

    const isAuthenticated = true;
    const user = {
        role: 'admin',
    };

    const logoutClick = ()=> {
        console.log("Logout")
    }

    return (
        <>
            <ColorModeSwitcher />
            <Button
                onClick={onOpen}
                colorScheme="purple"
                width={'12'}
                height={'12'}
                rounded={'full'}
                position={'fixed'}
                top={'6'}
                left={4}
                bottom={'6'}
            >
                <RiMenu5Fill />
            </Button>

            <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay backdropFilter={'blur(3px)'} />
                <DrawerContent>
                    <DrawerHeader borderBottomWidth={'2px'}>Elearner</DrawerHeader>

                    <DrawerBody>
                        <VStack spacing={'2px'} alignItems={'flex-start'}>
                            <LinkButton url="/" title={'Home'} />
                            <LinkButton url="/courses" title={'Browse Courses'} />
                            <LinkButton url="/request" title={'Request for a course'} />
                            <LinkButton url="/contact" title={'Contact Us'} />
                            <LinkButton url="/about" title={'About us'} />

                            <HStack
                                justifyContent={'space-evenly'}
                                bottom={'2rem'}
                                position={'absolute'}
                                width={'80%'}
                            >
                                {isAuthenticated ? (
                                    // login person
                                    <>
                                        <VStack>
                                            <HStack>
                                                <Link to={'/profile'}>
                                                    <Button colorScheme="purple" >Profile</Button>
                                                </Link>
                                                <Button colorScheme="purple" onClick={logoutClick}>
                                                    <RiLogoutBoxFill style={{ margin: '4px' }} />
                                                    Logout
                                                </Button>
                                            </HStack>
                                            (user && user.role ==='admin' &&
                                            <Link to={'/admin/dashboard'}>
                                                <Button colorScheme="purple" variant={'ghost'}>
                                                    <RiDashboardFill style={{ margin: '2px' }} />
                                                    Dashboard
                                                </Button>
                                            </Link>
                                            )
                                        </VStack>
                                    </>
                                ) : (
                                    // not login in person
                                    <>
                                        <Link to={'/login'}>
                                            <Button colorScheme="purple">Login</Button>
                                        </Link>
                                        <h6>Or</h6>
                                        <Link to={'/register'}>
                                            <Button colorScheme="purple">Sign up</Button>
                                        </Link>
                                    </>
                                )}
                            </HStack>
                        </VStack>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    );
};

export default Header;
