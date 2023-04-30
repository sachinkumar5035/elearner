import { Button, Container, Grid, Heading, Image, Input, Select, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';
import Sidebar from '../Dashboard/Sidebar';
import { fileUploadCSS } from '../../Auth/Register';



const CreateCourse = () => {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [createdBy, setCreatedBy] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [imagePrev, setImagePrev] = useState("");

  const categories = [
    'Web development',
    'App development',
    'Data structures',
    'Algorithms',
    'Data Science',
    'Skill Development',
    'Game development',
    'Political science',
    'geogyaphy',
    'Maths',
  ];

  const fileUploadStyle = {
    '&::file-selector-button': fileUploadCSS,
  };


  const imageChangeHandler = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImagePrev(reader.result);
      setImage(file);
    };
  };

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
            />
            <Input
              id="description"
              value={description}
              onChange={e => setDescription(e.target.value)}
              placeholder="Description"
              type="text"
              focusBorderColor="purple.400"
            />
            <Input
              id="createdBy"
              value={createdBy}
              onChange={e => setCreatedBy(e.target.value)}
              placeholder="Creator Name"
              type="text"
              focusBorderColor="purple.400"
            />
            <Select
              focusBorderColor='purple'
              value={category}
              onChange={e => setCategory()}
            >
              <option value="">select category</option>
              {
                categories.map((item, index) => (
                  <option key={index} value={item}>{item}</option>
                ))
              }
            </Select>
            <Input
              required
              type="file"
              accept="image/*"
              focusBorderColor="purple.400"
              css={fileUploadStyle}
              onChange={imageChangeHandler}
            />
            {
              imagePrev && (<Image src={imagePrev} boxSize={'64'} objectFit={'contain'} />)
            }
            <Button width={'full'} colorScheme='purple' type='submit'>Create</Button>
          </VStack>
        </form>
      </Container>
      <Sidebar />
    </Grid>
  );
};

export default CreateCourse;
