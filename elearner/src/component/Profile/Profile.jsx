import { Avatar, Button, Container, HStack, Heading, Image, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Stack, Text, VStack, useDisclosure } from '@chakra-ui/react'
import React, { useState } from 'react'
import { RiDeleteBin7Fill } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import { fileUploadCSS } from '../Auth/Register'

const Profile = ({user}) => {

  // const user = {
  //   name: "sachin",
  //   email: "sachinkumar5035@gmail.com",
  //   createdAt: String(new Date().toISOString()),
  //   role: "user",
  //   subscription: {
  //     status: undefined,
  //   },
  //   playlist: [
  //     {
  //       course: "course Id",
  //       poster: "https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?cs=srgb&dl=pexels-james-wheeler-414612.jpg&fm=jpg"
  //     }
  //   ]
  // }

  // console.log("user",user);

  const removeFromPlaylistHandler = (id) => {
    alert("remove handler clicked " + id)
  }

  const changeImageSubmitHandler = (e,image)=>{
    e.preventDefault();
    console.log(image);
  }


  const {isOpen,onClose,onOpen} = useDisclosure();


  return (
    <Container minH={'95vh'} maxW={'container.lg'} paddingY={'8'}>
      <Heading
        textTransform={'uppercase'}
        margin={'8'}
      >
        Profile
      </Heading>

      <Stack j
        ustifyContent={'flex-start'}
        direction={['column', 'row']}
        alignItems={'center'}
        spacing={['8', '16']}
        padding={'8'}
      >
        <VStack>
          <Avatar boxSize={'48'} src={user.avatar.url} />
          <Button onClick={onOpen} colorScheme='purple' variant={'ghost'}> Change Photo</Button>
        </VStack>
        <VStack spacing={'4'} alignItems={['center', 'flex-start']}>
          <HStack>
            <Text fontWeight='bold'>Name:</Text>
            <Text >{user.name}</Text>
          </HStack>
          <HStack>
            <Text fontWeight='bold'>Email:</Text>
            <Text >{user.email}</Text>
          </HStack>
          <HStack>
            <Text fontWeight='bold'>CreatedAt:</Text>
            <Text>{user.createdAt.split("T")[0]}</Text>
          </HStack>
          {
            user.role !== "admin" && <HStack>
              <Text fontWeight={'bold'}>Subscription</Text>
              {
                user.subscription && user.subscription.status === 'active' ? (
                  <Button colorScheme='purple'>Cancel subscription</Button>
                ) : (
                  <Link to={'/subscribe'}>
                    <Button colorScheme='purple'>Subscribe</Button>
                  </Link>
                )
              }
            </HStack>
          }

          <Stack
            direction={['column', 'row']}
            alignItems={'center'}
          >
            <Link to={'/profile/change'}>
              <Button colorScheme='purple' variant={'ghost'}>Update Profile</Button>
            </Link>
            <Link to={'/password/update'}>
              <Button colorScheme='purple' variant={'ghost'}>Change Password</Button>
            </Link>
          </Stack>
        </VStack>
      </Stack>

      <Heading children="Playlist" size={'md'} />
      {
        user.playlist.length > 0 && (
          <Stack
            direction={['column', 'row']}
            alignItems={'center'}
            flexWrap={'wrap'}
            padding={'4'}
          >
            {
              user.playlist.map((element) => (
                <VStack
                  width={'48'}
                  margin={'2'}
                  key={element.course}
                >
                  <Image boxSize={'full'} objectFit={'contain'} src={element.poster}></Image>
                  <HStack>
                    <Link to={`/course/${element.course}`}>
                      <Button variant={'ghost'} colorScheme='purple'>
                        Watch Now
                      </Button>
                    </Link>
                    <Button onClick={() => removeFromPlaylistHandler(element.course)}>
                      <RiDeleteBin7Fill />
                    </Button>
                  </HStack>
                </VStack>
              ))
            }

          </Stack>
        )
      }
      <ChangeBox isOpen={isOpen} onClose={onClose} changeImageSubmitHandler={changeImageSubmitHandler}/>
    </Container>
  )
}

export default Profile;



function ChangeBox({isOpen,onClose,changeImageSubmitHandler}) {

  const [image,setImage] = useState("");
  const [imagePrev,setImagePrev] = useState("");

  const changeImage = e => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImagePrev(reader.result);
      setImage(file);
    };
  };

  const closeHandler = ()=>{
    onClose();
    setImage("");
    setImagePrev("");
  }

  return (
    <Modal isOpen={isOpen} onClose={closeHandler} >
      <ModalOverlay backdropFilter={'blur(5px)'} />
      <ModalContent>
        <ModalHeader>Change Photo</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Container>
            <form onSubmit={(e)=>changeImageSubmitHandler(e,image)}> 
              <VStack spacing={'8'}>
                {
                  imagePrev && <Avatar src={imagePrev} boxSize={'48'}/>
                }
                <Input type='file' css={{"&::file-selector-button":fileUploadCSS}} onChange={changeImage}></Input>
                <Button type='submit' width={'full'} colorScheme='purple'>Change</Button>
              </VStack>
            </form>
          </Container>
        </ModalBody>
        <ModalFooter>
          <Button marginRight={'3'} onClick={closeHandler}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}