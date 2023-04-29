import { Box, Grid, HStack, Heading, Progress, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import Sidebar from './Sidebar';
import { RiArrowDownLine, RiArrowUpLine } from 'react-icons/ri';

const Dashboard = () => {
    return (
        <Grid minH={'100vh'} templateColumns={['1fr', '5fr 1fr']}>
            <Box boxSize={'border-box'} paddingY={'16'} paddingX={['4', '0']}>
                <Text
                    textAlign={'center'}
                    opacity={'.5'}
                    children={`Last change was on ${String(new Date()).split('G')[0]}`}
                />

                <Heading
                    children="Dashboard"
                    marginLeft={['0', '16']}
                    marginBottom={'16'}
                    textAlign={['center', 'left']}
                />

                <Stack
                    direction={['column', 'row']}
                    minH={'24'}
                    justifyContent={'space-evenly'}
                >
                    <DataBox title="Views" qty={123} qtyPercentage={30} profit={true} />
                    <DataBox title="Users" qty={13} qtyPercentage={20} profit={true} />
                    <DataBox
                        title="Subscription"
                        qty={30}
                        qtyPercentage={40}
                        profit={false}
                    />
                </Stack>

                <Box
                    margin={['0', '16']}
                    borderRadius={'lg'}
                    padding={['0', '16']}
                    marginTop={['4', '16']}
                    boxShadow={'-5px 0 10px rgba(107,70,193,.6)'}
                >
                    <Heading
                        textAlign={['center', 'left']}
                        size={'md'}
                        children="Views Graph"
                        paddingTop={['8', '0']}
                        marginLeft={['0', '16']}
                    />
                    {/* Line graph Here */}
                </Box>
                <Grid templateColumns={['1fr', '2fr 1fr']}>
                    <Box padding={'4'}>
                        <Heading
                            textAlign={['center', 'left']}
                            size={'md'}
                            children="Progress Bar"
                            marginY={'8'}
                            marginLeft={['0', '16']}
                        />
                        <Box>
                            <Bar profit={true} title="Views" value={30} />
                            <Bar profit={true} title="Users" value={20} />
                            <Bar profit={false} title="Subscription" value={40} />
                        </Box>
                    </Box>
                    <Box padding={['0','16']} boxSizing='border-box'>
                        <Heading textAlign={'center'} size={'md'} marginBottom={'4'} children={"Users"}/>
                        {/* Dounut Graph */}
                    </Box>
                </Grid>
            </Box>
            <Sidebar />
        </Grid>
    );
};

export default Dashboard;

const DataBox = ({ title, qty, qtyPercentage, profit }) => (
    <Box
        width={['full', '20%']}
        boxShadow={'-5px 0 10px rgba(107,70,193,.6)'}
        padding={'8'}
        borderRadius={'lg'}
    >
        <Text fontWeight={'bold'}>{title}</Text>
        <HStack>
            <Text fontSize={'2xl'} fontFamily={'bold'} children={qty} />
            <HStack>
                <Text children={`${qtyPercentage}%`} />
                {profit ? (
                    <RiArrowUpLine color="green" />
                ) : (
                    <RiArrowDownLine color="red" />
                )}
            </HStack>
        </HStack>
        <Text fontSize={'xs'} opacity={'.6'} children="Since Last Month" />
    </Box>
);


const Bar = ({ title, value,profit }) => (
    <Box paddingY={'4'} paddingX={['0', '20']}>
        <Heading marginBottom={'2'} size={'sm'} children={title} />
        <HStack width={'full'} alignItems={'center'}>
            <Text children={profit?"0%":`-${value}%`} />
            <Progress width={'full'} value={profit?value:0} colorScheme='purple' />
            <Text children={`${value > 100 ? value : 100}%`} />
        </HStack>
    </Box>
)