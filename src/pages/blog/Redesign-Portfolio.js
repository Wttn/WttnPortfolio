import {
    Container,
    Center,
    Image,
    VStack,
    Box,
    Stack
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { Title, Type, HeadingArticle, DescriptionImage } from '../../components/work'
import P from '../../components/paragraph'
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';


const Work = () => (
    <Layout title="Redesign Portfolio"  >
        <Container maxW="container.full" paddingX={0}>
            <Center my={6} w={'full'} backgroundSize={'cover'} backgroundPosition={'center center'} bgColor="black" >
                <Image src="../images/blog/new-portfolio-post.png" alt="Wttn logo post" padding="24px" />
            </Center>
            <Container maxWidth="100%" mt="2rem">
                <VStack spacing="1.5rem" align='center'>

                    <VStack spacing="0.5rem" align='left' width="49rem" >

                        <Title>
                            Redesign Portfolio
                        </Title>

                        <Type>
                            UX/UI Design
                        </Type>

                    </VStack >
                    <VStack align="left" spacing="1rem" width="49rem" flexGrow={1} mt="16px">
                        <VStack spacing="1rem" align='start' >
                            <HeadingArticle>
                                Introduction
                            </HeadingArticle>

                            <P>
                                {"I decided to improve my portfolio and show it more engagingly after becoming a professional in the field of user experience design (UX). After looking through my previously released portfolio, it gave the impression that I was looking for ways to get into the UX industry and present my knowledge. The projects in this initial portfolio, which I put together while earning the Google UX certification through Coursera, were ones I worked on throughout the course and as an IT analyst. Although it was a significant turning point, once I began working in the industry directly, I felt the need to create a fresh portfolio that better reflected my work and personality."}
                            </P>
                            <P>
                                {"One of the most significant changes I made was creating a page that presented the projects clearly and approached my work more directly. Although I had chosen a One Page website format for my previous portfolio, some comments mentioned that it was too lengthy. Taking advantage of this feedback, I decided to build a new portfolio with topics divided into separate pages to provide a better user experience."}
                            </P>

                        </VStack>
                        <Stack align="center">
                            <Box maxW="fit-content" boxShadow={"0px 8px 15px 0px rgba(51, 51, 51, 0.15)"} mt="1.5rem" mb="1.5rem" >
                                <ReactCompareSlider
                                    itemOne={<ReactCompareSliderImage src="/images/blog/hero-old.png" srcSet="/images/blog/hero-old.png" alt="Oldest hero section of portfolio " />}
                                    itemTwo={<ReactCompareSliderImage src="/images/blog/hero-new.png" srcSet="/images/blog/hero-new.png" alt="The new hero section of portfolio" />}
                                />
                            </Box>
                            <DescriptionImage>
                                A comparison of the hero section portfolios from the old and new.
                            </DescriptionImage>
                        </Stack>
                        <VStack spacing="0.5rem" align='start' >
                            <HeadingArticle>
                                Challenge
                            </HeadingArticle>

                            <P>
                                {"The biggest difficulty I faced with this project was learning something completely new to use. In the past, when I worked as an analyst, I used Wordpress with modular themes or the Hugo Framework. I challenged myself in this project and tried to create a portfolio from scratch, following the end-to-end process, making a prototype, writing the code, and deploying it to production. After completing the research and prototyping stages, I took some JavaScript courses and Chakra UI classes, and started turning my prototype into code."}
                            </P>
                            <P>
                                {" My deepest gratitude goes to a front-end friend who had patience with me for hours, answering numerous questions and teaching me best practices. Although I believe there's still much to improve, I'm happy with the development of my portfolio."}                            </P>

                        </VStack>


                        <VStack spacing="0.5rem" align='start' >
                            <HeadingArticle>
                                Illustrations
                            </HeadingArticle>

                            <P>
                                {"Another important point was the separation of pages related to my UX Design work and illustration, as the latter is an activity I engage in more as a hobby and freelancer. I chose not to delete it from my portfolio because, in specific cases, I send it to people who contact me with an interest in that aspect. Additionally, I consider illustration to be a part of my personality, so I decided to create a dedicated page for it, where I can showcase images with the desired quality, unlike social media platforms like Instagram, where the images tend to lose their quality and are primarily used for social purposes."}

                            </P>
                        </VStack>
                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", width: "100%", }}>

                        </div>
                        <Stack align="center">
                            <Box maxW="fit-content" boxShadow={"0px 8px 15px 0px rgba(51, 51, 51, 0.15)"} mt="1.5rem" mb="1.5rem" >
                                <ReactCompareSlider
                                    itemOne={<ReactCompareSliderImage src="/images/blog/illustration-new.png" srcSet="/images/blog/illustration-new.png" alt="Image one" />}
                                    itemTwo={<ReactCompareSliderImage src="/images/blog/illustration-old.png" srcSet="/images/blog/illustration-old.png" alt="Image two" />}
                                />
                            </Box>
                            <DescriptionImage>
                                A comparison between the new Illustration dedicated page and previous Illustration section.
                            </DescriptionImage>
                        </Stack>
                        <VStack align="left" gap="0.25rem" >
                        </VStack>
                    </VStack>
                </VStack>
            </Container>

            <Container mb="112px">

            </Container>

        </Container>
    </Layout >
)

export default Work
