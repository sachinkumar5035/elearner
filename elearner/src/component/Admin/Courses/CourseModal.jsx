import { Box, Button, Grid, Heading, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Stack, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { RiDeleteBin7Fill } from 'react-icons/ri';
import { fileUploadCSS } from '../../Auth/Register';


const CourseModal = ({ isOpen, onClose, courseId, courseTitle, deleteButtonHandler, addLectureHandler, lectures = [] }) => {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [video, setVideo] = useState("");
    const [videoPrev, setVideoPrev] = useState("");

    const fileUploadStyle = {
        '&::file-selector-button': fileUploadCSS,
    };


    const changeVideoHandler = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setVideoPrev(reader.result);
            setVideo(file);
        };
    };


    const closeHandler=()=>{
        setTitle("");
        setDescription("");
        setVideoPrev("");
        setVideo("");
        onClose();
    }

    return (
        <Modal isOpen={isOpen} size={'full'} onClose={closeHandler} scrollBehavior='outside'>

            <ModalOverlay />

            <ModalContent>

                <ModalHeader>{courseTitle}</ModalHeader>

                {/* <ModalCloseButton onClick={onClose} /> */}

                <ModalBody padding={'16'}>
                    <Grid templateColumns={['1fr', '3fr 1fr']}>
                        <Box paddingX={['0', '16']}>
                            <Box marginY={'5'}>
                                <Heading>{courseTitle}</Heading>
                                <Heading size={'sm'} opacity={.4}>{`#${courseId}`}</Heading>
                            </Box>

                            <Heading size={'lg'}>Lectures</Heading>
                            <VideoCard
                                num={"this is sample lecture number"}
                                title={"this is sample title"}
                                descrition={"this is sample description"}
                                courseId={"this is sample course ID which is comming from admin course page"}
                                lectureId={"this is sample lecture ID"}
                                deleteButtonHandler={deleteButtonHandler}
                            />
                        </Box>
                        <Box>
                            <form onSubmit={e => addLectureHandler(e, courseId, title, description, video)}>
                                <VStack spacing={'4'}>
                                    <Heading size={'md'} textTransform={'uppercase'}>Add lectures</Heading>
                                    <Input
                                        placeholder='Title'
                                        value={title}
                                        focusBorderColor="purple.400"
                                        onChange={(e) => setTitle(e.target.value)}
                                    ></Input>
                                    <Input
                                        placeholder='Description'
                                        value={description}
                                        focusBorderColor="purple.400"
                                        onChange={(e) => setDescription(e.target.value)}
                                    ></Input>
                                    <Input
                                        required
                                        type="file"
                                        accept="video/mp4"
                                        focusBorderColor="purple.400"
                                        css={fileUploadStyle}
                                        onChange={changeVideoHandler}
                                    />
                                    {
                                        videoPrev && (
                                            <video controlsList='nodownload' controls src={videoPrev}></video>
                                        )
                                    }
                                    <Button width={'full'} colorScheme='purple' type='submit'>
                                        Upload
                                    </Button>
                                </VStack>
                            </form>
                        </Box>
                    </Grid>
                </ModalBody>
                <ModalFooter>
                    <Button onClick={closeHandler}>Close</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}

export default CourseModal;

function VideoCard({ num, title, descrition, courseId, lectureId, deleteButtonHandler }) {
    return (
        <Stack
            direction={['column', 'row']}
            marginY={'8'}
            borderRadius={'lg'}
            boxShadow={'0 0 10px rgba(107,70,193,.6)'}
            justifyContent={['flex-start', 'space-between']}
            padding={['4', '8']}
        >
            <Box>
                <Heading size={'sm'}>{`#${num} #${title}`}</Heading>
                <Text>{descrition}</Text>
            </Box>
            <Button color={'purple.600'} onClick={() => deleteButtonHandler(courseId, lectureId)}>
                <RiDeleteBin7Fill />
            </Button>
        </Stack>
    )
}

