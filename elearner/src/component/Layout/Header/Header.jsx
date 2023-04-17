import React from 'react'
import { ColorModeSwitcher } from "../../../ColorModeSwitcher.js"
import { Button, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, VStack, useDisclosure } from '@chakra-ui/react'
import {RiMenu5Fill} from 'react-icons/ri';
import { Link } from 'react-router-dom';

const Header = () => {

    const {onClose,isOpen,onOpen}  = useDisclosure();


    return (
        <>
            <ColorModeSwitcher />
            <Button
            onClick={onOpen}
                colorScheme='purple'
                width={'12'}
                height={'12'}
                rounded={'full'}
                position={'fixed'}
                top={'6'}
                bottom={'6'}
            >
            <RiMenu5Fill/>
            </Button>

            <Drawer placement='left' onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay backdropFilter={'blur(3px)'}/>
                <DrawerContent>
                    <DrawerHeader borderBottomWidth={'2px'}>
                        Elearner
                    </DrawerHeader>

                    <DrawerBody>
                        <VStack>
                        <Link to={'/'}>
                            <Button variant={'ghost'}>Home</Button>
                        </Link>
                        <Link to={'/'}>
                            <Button variant={'ghost'}>Home</Button>
                        </Link>
                        <Link to={'/'}>
                            <Button variant={'ghost'}>Home</Button>
                        </Link>
                        
                        </VStack>
                        
                    </DrawerBody>
                </DrawerContent>
                
            </Drawer>
        </>
    )
}

export default Header
