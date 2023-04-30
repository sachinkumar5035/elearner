import { Box, Button, Grid, HStack, Heading, Image, Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import Sidebar from '../Dashboard/Sidebar'
import { RiDeleteBin7Fill } from 'react-icons/ri';
import CourseModal from './CourseModal';


const AdminCourses = () => {


    const { isOpen, onClose, onOpen } = useDisclosure();

    const courses = [{
        _id: "sample course id",
        title: "sample title",
        poster: {
            url: "sample url"
        },
        category: "sample category",
        createdBy: "sample creator",
        views: 123,
        noOfVideos: 12
    }];

    const courseDetailHandler = (courseId) => {
        console.log(courseId);
        // alert(userId);
        onOpen();
    }

    const deleteUserHandler = (courseId) => {
        console.log(courseId);
        // alert(userId);
    }


    const deleteLectureButtonHandler = (courseId, lectureId) => {
        alert("this is deleteLectureButtonHandler sample function");
    }

    const addLectureHandler=(e,title,courseId,description,video)=>{
        alert("this is add lecture handler function ");
    }

    return (
        <Grid minH={'100vh'} templateColumns={['1fr', '5fr 1fr']}>
            <Box
                padding={['0', '8']}
                overflow={'auto'}
            >
                <Heading textTransform={'uppercase'} textAlign={['center', 'left']} marginY={'16'}>
                    All courses
                </Heading>
                <TableContainer width={['100vw', 'full']}>
                    <Table variant={'simple'} size={'lg'}>
                        <TableCaption>
                            All available courses
                        </TableCaption>
                        <Thead>
                            <Tr>
                                <Th>Id</Th>
                                <Th>Poster</Th>
                                <Th>Title</Th>
                                <Th>Category</Th>
                                <Th>Creator</Th>
                                <Th isNumeric>Views</Th>
                                <Th isNumeric>Lectures</Th>
                                <Th isNumeric>Action</Th>

                            </Tr>
                        </Thead>
                        <Tbody>
                            {
                                courses.map(item => (
                                    <Row key={item._id} item={item} courseDetailHandler={courseDetailHandler} deleteUserHandler={deleteUserHandler} />
                                ))
                            }
                        </Tbody>
                    </Table>
                </TableContainer>
                {/* this is separate page to display course details */}
                <CourseModal
                    isOpen={isOpen}
                    onClose={onClose}
                    id="this is sample courseID"
                    courseTitle="this is sample course title"
                    deleteButtonHandler={deleteLectureButtonHandler}
                    addLectureHandler={addLectureHandler}
                />
            </Box>
            <Sidebar />
        </Grid>
    )
}

function Row({ item, courseDetailHandler, deleteUserHandler }) {
    return (
        <Tr>
            <Td>#{item._id}</Td>
            <Td>
                <Image src={item.poster.url} />
            </Td>
            <Td>{item.title}</Td>
            <Td textTransform={'uppercase'}>{item.category}</Td>
            <Td>{item.createdBy}</Td>
            <Td isNumeric>{item.views}</Td>
            <Td isNumeric>{item.noOfVideos}</Td>
            <Td isNumeric>
                <HStack justifyContent={'flex-end'}>
                    <Button
                        onClick={() => courseDetailHandler(item._id)}
                        variant={'outline'}
                        color={'purple.400'}
                    >
                        View Lectures
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
export default AdminCourses
