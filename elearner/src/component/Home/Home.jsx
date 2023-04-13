import React from 'react'
import { Stack } from "@chakra-ui/react";
import './home.css'


const Home = () => {
  return (
    <section className='home'>
      <div className="container">
        <Stack
          direction={['column', 'row']}
          height="100%"
          justifyContent={['center','space-between']}
          alignItems='center'
          spacing={['16','56']}
        >
          <div>
            This is home page
          </div>
        </Stack>
      </div>
    </section>
  )
}

export default Home;
