import {
    Container,
    ListItem,
    UnorderedList,
    Center,
    Image,
    VStack,
    Box,
    Stack
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { Title, Type, HeadingArticle, DescriptionImage } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
    <Layout title="Agro-sol Design System"  >
        <Container maxW="container.full" paddingX={0}>
            <Center my={6} w={'full'} backgroundSize={'cover'} backgroundPosition={'center center'} bgColor="#46762E" >
                <Image src="/images/works/AgrosolDesignSystem.png" alt="icon" />
            </Center>
            <Container maxWidth="100%" mt="2rem">
                <VStack spacing="1.5rem" align='center'>

                    <VStack spacing="0.5rem" align='start' width="49rem"  >
                        <Title>
                            Agro-sol Design System
                        </Title>

                        <Type>
                            IT Analyst / UI/UX Design
                        </Type>

                    </VStack >
                    <VStack align="left" spacing="1rem" width="49rem" flexGrow={1} mt="16px">
                        <VStack spacing="0.25rem" align='start' >
                            <HeadingArticle>
                                Overview
                            </HeadingArticle>

                            <P>
                                The Agro-sol Design System was developed to address discrepancies that appeared during the creation of PowerApps applications. I recommended the development of a design system after realizing that the absence of standardization was harming application consistency and degrading user experience.
                            </P>

                        </VStack>


                        <VStack align="left" gap="0.2rem" >
                            <HeadingArticle>
                                Objective
                            </HeadingArticle>
                            <P>
                                The primary goal of the Agro-sol Design System was to establish robust design and development guidelines, focusing on user-centricity, inclusivity, simplicity, and consistency. The system wanted to standardize application functionality and visual design in order to give consumers a seamless and enjoyable experience.
                            </P>
                        </VStack>
                        <VStack align="left" >
                            <HeadingArticle>
                                Methodology
                            </HeadingArticle>
                            <P>
                                The design system construction process adopted the Atomic Design System methodology, developed by Brad Frost in 2013. This project was divided into three fundamental stages:
                            </P>
                            <Stack align="center" >

                                <Box maxW="fit-content" boxShadow={"0px 1px 10px 0px rgba(51, 51, 51, 0.15)"} mt="1.5rem" mb="1.5rem">
                                    <Image src="/images/works/AtomicDesignSystem.png" alt="A screenshot of hotel avenida website" />

                                </Box>
                                <DescriptionImage>
                                    Atomic Design Structure.
                                </DescriptionImage>
                            </Stack>
                            <HeadingArticle>
                                Stage 1 - Pattern Mapping
                            </HeadingArticle>
                            <P>
                                A thorough mapping of design patterns, including their structures, colors, typography, icons, and components, was done in this phase. This made it easier to build a strong system foundation and ensured aesthetic and functional uniformity across all apps.
                            </P>
                            <HeadingArticle>
                                Stage 2 - Best Practices Documentation
                            </HeadingArticle>
                            <P>
                                After mapping all components, focus was shifted towards creating documentation outlining best practices for screen construction and the use of system components. This ensured alignment with established guidelines.
                            </P>
                            <HeadingArticle>
                                Stage 3 - Future Preparedness
                            </HeadingArticle>
                            <P>
                                The third stage centered around future activities. This encompassed the ongoing review of the design system to meet ever-evolving accessibility requirements, as well as preparing the design system for application beyond the PowerApps environment, thereby expanding its impact.
                            </P>
                            <Stack align="center" >

                                <Box maxW="fit-content" boxShadow={"0px 1px 10px 0px rgba(51, 51, 51, 0.15)"} mt="1.5rem" mb="1.5rem">
                                    <Image src="/images/works/AgrosolDesignSystemGeneral.png" alt="A screenshot of hotel avenida website" />

                                </Box>
                                <DescriptionImage>
                                    Small Part of UI Library.
                                </DescriptionImage>
                            </Stack>
                            <HeadingArticle>
                                Outcome
                            </HeadingArticle>
                            <P>
                                By embracing consistent and user-centered design practices, optimizing development, improving usability, and delivering a more cohesive experience across all interactions, the design system has made a significant impact. The design system is poised to evolve to meet the growing demands of accessibility and to be applied in a variety of contexts, ensuring a user experience across diverse platforms.
                            </P>
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
