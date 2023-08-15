import {
    Container,
    Center,
    Image,
    VStack,
    Box,
    Stack,
    Button
} from '@chakra-ui/react'
import NextLink from 'next/link'
import Layout from '../../components/layouts/article'
import { Title, Type, HeadingArticle, DescriptionImage } from '../../components/work'
import P from '../../components/paragraph'
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import { useTranslation } from 'react-i18next';
import { ChevronRightIcon } from '@chakra-ui/icons'


const Work = () => {
    const { t } = useTranslation();
    return (
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
                                    {t('redesignPortfolio.introductionHeader')}
                                </HeadingArticle>

                                <P>
                                    {t('redesignPortfolio.introductionParagraph')}
                                </P>
                                <P>
                                    {t('redesignPortfolio.introductionParagraph2')}
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
                                    {t('redesignPortfolio.image1Description1')}
                                </DescriptionImage>
                            </Stack>
                            <VStack spacing="0.5rem" align='start' >
                                <HeadingArticle>
                                    {t('redesignPortfolio.challengeHeader')}
                                </HeadingArticle>

                                <P>
                                    {t('redesignPortfolio.challengeParagraph1')}
                                </P>
                                <P>
                                    {t('redesignPortfolio.challengeParagraph2')}
                                </P>

                            </VStack>


                            <VStack spacing="0.5rem" align='start' >
                                <HeadingArticle>
                                    {t('redesignPortfolio.illustrationsHeader')}
                                </HeadingArticle>

                                <P>
                                    {t('redesignPortfolio.illustrationsParagraph')}

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
                                    {t('redesignPortfolio.image1Description2')}
                                </DescriptionImage>
                            </Stack>
                            <VStack align="left" gap="0.25rem" >
                                <VStack spacing="0.5rem" align='start' >
                                    <HeadingArticle>
                                        {t('redesignPortfolio.languageHeader')}
                                    </HeadingArticle>

                                    <P>
                                        {t('redesignPortfolio.languageParagraph1')}

                                    </P>
                                    <P>
                                        {t('redesignPortfolio.languageParagraph2')}

                                    </P>
                                    <Stack align="center" >

                                        <Box maxW="fit-content" boxShadow={"0px 1px 10px 0px rgba(51, 51, 51, 0.15)"} mt="1.5rem" mb="1.5rem">
                                            <Image src="/images/works/Navbar.png" alt="A screenshot of navbar website with language options" />

                                        </Box>
                                        <DescriptionImage>
                                            {t('redesignPortfolio.image1Description')}
                                        </DescriptionImage>
                                    </Stack>
                                    <HeadingArticle>
                                        {t('redesignPortfolio.conclusionHeader')}
                                    </HeadingArticle>
                                    <P>
                                        {t('redesignPortfolio.conclusionParagraph1')}

                                    </P>
                                    <P>
                                        {t('redesignPortfolio.conclusionParagraph2')}

                                    </P>
                                    <P>
                                        {t('redesignPortfolio.conclusionParagraph3')}

                                    </P>
                                    <P>
                                        {t('redesignPortfolio.conclusionParagraph4')}

                                    </P>

                                </VStack>
                                <Button
                                    as={NextLink}
                                    href="https://www.figma.com/file/KM3EgLOw0PWMywxj5rlBaY/New-Portfolio?type=design&node-id=0%3A1&mode=design&t=2fcSxXgoP3oVzHVK-1"
                                    target="_blank"
                                    scroll={false}
                                    rightIcon={<ChevronRightIcon />}
                                    colorScheme="gray"
                                    mt="32px"
                                >
                                    {t('redesignPortfolio.button')}
                                </Button>
                            </VStack>
                        </VStack>
                    </VStack>
                </Container>

                <Container mb="112px">

                </Container>

            </Container>
        </Layout >
    )
};
export default Work
