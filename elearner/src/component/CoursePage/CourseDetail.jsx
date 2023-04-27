import { Box, Grid, Heading, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import introVideo from '../../assets/videos/challa.mp4';



const CourseDetail = () => {
    const [lectureNumber,setLectureNumber] = useState(0);
    const lectureTitle = "this is lecture title";

    const lectures = [{
        _id: 'sample id 1',
        title: 'Lecture 1 ',
        descrition: "sample description",
        video: {
            url: "sample url",
        },
    },
    {
        _id: 'sample id 2',
        title: 'Lecture 2',
        descrition: "sample description",
        video: {
            url: "sample url",
        },
    },
    {
        _id: 'sample id 3',
        title: 'Lecture 3',
        descrition: "sample description",
        video: {
            url: "sample url",
        },
    },
    {
        _id: 'sample id 4',
        title: 'Lecture 4',
        descrition: "sample description",
        video: {
            url: "sample url",
        },
    }
]



    return (
        <Grid margin={'4'} minH={'90vh'} templateColumns={['1fr', '3fr 1fr']}>

            <Box>
                <video
                    width={'100%'}
                    src={introVideo}
                    autoPlay
                    controls
                    controlsList='nodownload noremoteplayback'
                    disablePictureInPicture
                    disableRemotePlayback
                >

                </video>
                <Heading margin={'4'} children={`#${lectureNumber + 1} ${lectures[lectureNumber].title}`} />
                <Heading margin={'4'}>
                    Description
                </Heading>
                <Text margin={'4'} children={lectures[lectureNumber].descrition} />
            </Box>

            <VStack>
                {
                    lectures.map((item, index) => (
                        <button
                        onClick={()=>setLectureNumber(index)}
                            key={item._id}
                            style={{
                                width:'100%',
                                padding:'1rem',
                                textAlign:'center',
                                margin:0,
                                borderBottom:'1px solid rgba(0,0,0,.2)'                     
                            }}
                        >
                            <Text noOfLines={1}>
                                #{index + 1} {item.title}
                            </Text>
                        </button>
                    ))
                }
            </VStack>
        </Grid>
    )
}

export default CourseDetail
