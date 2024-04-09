import React from 'react';
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
import { Title, Type, DescriptionImage } from '../../components/work'
import P from '../../components/paragraph'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { useTranslation } from 'react-i18next';


const Work = () => {
    const { t } = useTranslation();
    return (
        <Layout title={'Hotel Avenida'}>
            <Container maxW="container.full" paddingX={0}>
                <Center my={6} w={'full'} backgroundSize={'cover'} backgroundPosition={'center center'} bgColor="#FAF5EA" >
                    <Image src="/images/works/hotel-avenida.png" alt="icon" padding="64px" />
                </Center>
                <Container maxWidth="100%" mt="2rem">

                    <VStack spacing="1.5rem" align='center'>

                        <VStack spacing="0.5rem" align='left' width="49rem" maxWidth="100%" >
                            <Title>
                                Hotel Avenida
                            </Title>

                            <Type>
                                {t('hotelAvenida.job')}
                            </Type>

                        </VStack >
                        <VStack align="left" spacing="1rem" width="49rem" flexGrow={1} mt="16px" maxWidth="100%">
                            <VStack spacing="1rem" align='start' >

                                <P>
                                    {t('hotelAvenida.paragraph1')}
                                </P>
                                <P>
                                    {t('hotelAvenida.paragraph2')}
                                </P>
                                <P>
                                    {t('hotelAvenida.paragraph3')}
                                </P>
                                <P>
                                    {t('hotelAvenida.paragraph4')}
                                </P>
                                <P>
                                    {t('hotelAvenida.paragraph5')}
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
                                href="https://lp.avenidahotel.com.br/"
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
