import { Container, Grid, Heading, Input, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';
import Sidebar from '../Dashboard/Sidebar';

const CreateCourse = () => {
  const [title,setTitle] = useState("");
  return (
    <Grid
      minH={'100vh'}
      templateColumns={['1fr', '5fr 1fr']}
    >
      <Container paddingY={'16'}>
        <form>
          <Heading textTransform={'uppercase'} textAlign={['center', 'left']} marginY={'16'}>
            create course
          </Heading>
          <VStack margin={'auto'} spacing={'8'}>
            <Input
              id="title"
              value={title}
              onChange={e => setTitle(e.target.value)}
              placeholder="Title"
              type="text"
              focusBorderColor="purple.400"
            ></Input>
          </VStack>

        </form>
      </Container>
      <Sidebar />
    </Grid>
  );
};

export default CreateCourse;
