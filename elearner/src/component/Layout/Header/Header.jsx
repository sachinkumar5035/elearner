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

    const LinkButton = ({ url = '/', title = 'Home',onClose }) => (
        <Link onClick={onClose} to={url}>
            <Button variant={'ghost'}>{title}</Button>
        </Link>
    );

    const isAuthenticated = true;
    const user = {
        role: 'admin',
    };

    const logoutClick = ()=> {
        console.log("Logout")
        onClose();
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
                zIndex={'overlay'}
                bottom={'6'}
            >
                <RiMenu5Fill />
            </Button>

            <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay backdropFilter={'blur(3px)'} />
                <DrawerContent>
                    <DrawerHeader borderBottomWidth={'2px'}>E-Learner</DrawerHeader>

                    <DrawerBody>
                        <VStack spacing={'2px'} alignItems={'flex-start'}>
                            <LinkButton onClose={onClose} url="/" title={'Home'} />
                            <LinkButton onClose={onClose} url="/courses" title={'Browse Courses'} />
                            <LinkButton onClose={onClose} url="/request" title={'Request for a course'} />
                            <LinkButton onClose={onClose} url="/contact" title={'Contact Us'} />
                            <LinkButton onClose={onClose} url="/about" title={'About us'} />

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
                                                <Link onClick={onClose} to={'/profile'}>
                                                    <Button colorScheme="purple" >Profile</Button>
                                                </Link>
                                                <Button colorScheme="purple" onClick={logoutClick}>
                                                    <RiLogoutBoxFill style={{ margin: '4px' }} />
                                                    Logout
                                                </Button>
                                            </HStack>
                                            (user && user.role ==='admin' &&
                                            <Link onClick={onClose} to={'/admin/dashboard'}>
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
                                        <Link onClick={onClose} to={'/login'}>
                                            <Button colorScheme="purple">Login</Button>
                                        </Link>
                                        <h6>Or</h6>
                                        <Link onClick={onClose} to={'/register'}>
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
