import React from 'react';
import { useTranslation } from 'react-i18next';
import NextLink from 'next/link'
import {
    Container,
    Stack,
    Center,
    Image,
    VStack,
    Box,
    Button
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { Title, Type, HeadingArticle, DescriptionImage } from '../../components/work'
import P from '../../components/paragraph'
import { ChevronRightIcon } from '@chakra-ui/icons'


const Work = () => {
    return (
        <Layout title={'Hotel Avenida'}>
            <Container maxW="container.full" paddingX={0}>
                <Center my={6} w={'full'} backgroundSize={'cover'} backgroundPosition={'center center'} bgColor="#FAF5EA" >
                    <Image src="/images/works/hotel-avenida.png" alt="icon" padding="64px" />
                </Center>
                <Container maxWidth="100%" mt="2rem">

                    <VStack spacing="1.5rem" align='center'>

                        <VStack spacing="0.5rem" align='left' width="49rem" >
                            <Title>
                                Hotel Avenida
                            </Title>

                            <Type>
                                IT Analyst / UI/UX Designer
                            </Type>

                        </VStack >
                        <VStack align="left" spacing="1rem" width="49rem" flexGrow={1} mt="16px">
                            <VStack spacing="1rem" align='start' >

                                <P>
                                    {"The Avenida Hotel project began in 2019 with the goal of building a modern and functional website that could be integrated with the hotel's reservation engine. One of the main objectives was to make online booking easy and consistent."}
                                </P>
                                <P>
                                    {"The development was carried out using WordPress and employed a page structure with custom modular themes to facilitate maintenance according to the hotel's requirements."}
                                </P>
                                <P>
                                    {"By working with WordPress to realize the Avenida Hotel's vision, we were able to address the design requirements identified through competitive analyses and also meet design demands. This approach allowed for the creation of a digital presence that aligned with the hotel's identity and catered to market demands."}
                                </P>
                                <P>
                                    {" The collaborative card sorting process helped define the information architecture. This participatory method created effective navigation that facilitates visitors' exploration, aiding them in easily finding everything they need, from room information to facilities and events."}
                                </P>
                                <P>
                                    {"We highlight the successful integration between the website and the hotel system's reservation engine, enabling guests to effortlessly search for accommodation options and make reservations. This robust implementation provides a seamless experience from the initial search to the check-out moment."}
                                </P>

                            </VStack>
                            <Stack align="center" >

                                <Box maxW="fit-content" boxShadow={"0px 1px 10px 0px rgba(51, 51, 51, 0.15)"} mt="1.5rem" mb="1.5rem">
                                    <Image src="/images/works/Hotel Avenida.png" alt="A screenshot of hotel avenida website" />

                                </Box>
                                <DescriptionImage>
                                    Hotel Avenida Website Screen.
                                </DescriptionImage>
                            </Stack>
                            <Button
                                as={NextLink}
                                href="https://avenidahotel.com.br/"
                                target="_blank"
                                scroll={false}
                                rightIcon={<ChevronRightIcon />}
                                colorScheme="gray"
                                mt="32px"
                            >
                                Visit Website
                            </Button>
                        </VStack>
                    </VStack>
                </Container>

                <Container mb="112px">

                </Container>

            </Container>
        </Layout >
    )
}

export default Work
