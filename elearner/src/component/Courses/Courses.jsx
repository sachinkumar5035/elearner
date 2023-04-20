import React, { useState } from 'react';
import { Container, HStack, Heading, Input, Text, Button, Stack, VStack, Image, Link } from "@chakra-ui/react"



const Course = ({ views, title, imageSrc, id, addToPlaylistHandler, creator, description, lectureCount }) => {
    
    return (
        <VStack className='course' alignItems={['center', 'flex-start']} >
            <Image
                src={imageSrc}
                boxSize={'60'}
                objectFit={'contain'}
            />
            <Heading
                textAlign={['center', 'left']}
                maxW={'200px'}
                fontFamily={'sans-serif'}
                noOfLines={3}
                children={title}
                size={'sm'}
            />
            <Text children={description} noOfLines={2} />

            <HStack>

                <Text
                    fontWeight={'bold'}
                    children={"creator"}
                    textTransform={'uppercase'}
                />

                <Text
                    fontWeight={'bold'}
                    children={creator}
                    textTransform={'uppercase'}
                />
            </HStack>

            <Heading
                textAlign={'center'}
                size={'xs'}
                children={`Lectures- ${lectureCount}`}
                textTransform={'uppercase'}
            />
            <Heading
                size={'xs'}
                children={`Views- ${views}`}
                textTransform={'uppercase'}
            />

            <Stack alignItems={'center'} direction={['column', 'row']}>
                <Link to={`/course/${id}`} >
                    <Button colorScheme='purple'>Watch Now</Button>
                </Link>
                <Button
                    variant={'ghost'}
                    colorScheme='purple'
                    onClick={()=>addToPlaylistHandler(id)}
                >
                    Add to Playlist
                </Button>
            </Stack>
        </VStack>
    )
}




const Courses = () => {

    const [keyword, setKeyword] = useState("");
    const [category, setCategory] = useState("");
    const categories = [
        "Web development",
        'App development',
        "Data structures",
        "Algorithms",
        "Data Science",
        "Skill Development",
        "Game development",
        "Political science",
        "geogyaphy",
        "Maths"
    ]

    const addToPlaylistHandler = (id)=>{
        alert(`added to playlist- ${id}`);
    }



    return (
        <Container minH={'95vh'} minW={'container.lg'} paddingY={'8'}>
            <Heading children="All Courses" m={'8'} />
            <Input
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                placeholder='Search a course...'
                type='text'
                focusBorderColor='purple.500'
            />

            <HStack overflowX={'auto'} paddingY={'8'}>
                {
                    categories.map((item, index) => (
                        <Button key={index} onClick={() => setCategory(item)} minW={'40'}>
                            <Text children={item} />
                        </Button>
                    ))
                }
            </HStack>

            <Stack
                direction={["column", 'row']}
                flexWrap={'wrap'}
                justifyContent={['flex-start', 'space-evenly']}
                alignItems={['center', 'flex-start']}
            >

                <Course
                    title={"this is title"}
                    description={'this is dscription'}
                    imagesrc={'this is image src'}
                    views={11}
                    creator={'this is creator'}
                    lectureCount={1}
                    addtoplaylist={'this is add to playlist sample'}
                    id={"this is Id"}
                    addToPlaylistHandler={addToPlaylistHandler}
                />

            </Stack>


        </Container>

    )
}

export default Courses
