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
import { useTranslation } from 'react-i18next';

const Work = () => {
    const { t } = useTranslation();
    return (
        <Layout title="Agro-sol Design System"  >
            <Container maxW="container.full" paddingX={0}>
                <Center my={6} w={'full'} backgroundSize={'cover'} backgroundPosition={'center center'} bgColor="#46762E" >
                    <Image src="/images/works/AgrosolDesignSystem.png" alt="icon" />
                </Center>
                <Container maxWidth="100%" mt="2rem">
                    <VStack spacing="1.5rem" align='center'>

                        <VStack spacing="0.5rem" align='start' width="49rem" maxWidth="100%" >
                            <Title>
                                Agro-sol Design System
                            </Title>

                            <Type>
                                IT Analyst / UI/UX Design
                            </Type>

                        </VStack >
                        <VStack align="left" spacing="1rem" width="49rem" flexGrow={1} maxWidth="100%">
                            <VStack spacing="0.25rem" align='start' >
                                <HeadingArticle>
                                    {t('agrosolDesign.overviewHeader')}
                                </HeadingArticle>

                                <P>
                                    {t('agrosolDesign.overviewParagraph')}
                                </P>

                            </VStack>


                            <VStack align="left" gap="0.2rem" >
                                <HeadingArticle>
                                    {t('agrosolDesign.objectiveHeader')}
                                </HeadingArticle>
                                <P>
                                    {t('agrosolDesign.objectiveParagraph')}
                                </P>
                            </VStack>
                            <VStack align="left" >
                                <HeadingArticle>
                                    {t('agrosolDesign.methodologyHeader')}
                                </HeadingArticle>
                                <P>
                                    {t('agrosolDesign.methodologyParagraph')}
                                </P>
                                <Stack align="center" mt="24px" mb="24px">

                                    <Box maxW="fit-content" boxShadow={"0px 1px 10px 0px rgba(51, 51, 51, 0.15)"} mt="2rem" >
                                        <Image src="/images/works/AtomicDesignSystem.png" alt="A screenshot of hotel avenida website" />

                                    </Box>
                                    <DescriptionImage>
                                        {t('agrosolDesign.image1Description')}
                                    </DescriptionImage>
                                </Stack>
                                <Stack mt="24px">
                                    <HeadingArticle>
                                        {t('agrosolDesign.stage1Header')}
                                    </HeadingArticle>
                                    <P>
                                        {t('agrosolDesign.stage1Paragraph')}
                                    </P>
                                    <HeadingArticle>
                                        {t('agrosolDesign.stage2Header')}
                                    </HeadingArticle>
                                    <P>
                                        {t('agrosolDesign.stage2Paragraph')}
                                    </P>
                                    <HeadingArticle>
                                        {t('agrosolDesign.stage3Header')}
                                    </HeadingArticle>
                                    <P>
                                        {t('agrosolDesign.stage3Paragraphg')}
                                    </P>
                                </Stack>
                                <Stack align="center" mt="24px" >

                                    <Box maxW="fit-content" boxShadow={"0px 1px 10px 0px rgba(51, 51, 51, 0.15)"} mt="1.5rem" mb="1.5rem">
                                        <Image src="/images/works/AgrosolDesignSystemGeneral.png" alt="A screenshot of hotel avenida website" />

                                    </Box>
                                    <DescriptionImage>
                                        {t('agrosolDesign.image2Description')}
                                    </DescriptionImage>
                                </Stack>
                                <Stack mt="24px">
                                    <HeadingArticle >
                                        {t('agrosolDesign.outcomeHeader')}
                                    </HeadingArticle>
                                    <P>
                                        {t('agrosolDesign.outcomeParagraph')}
                                    </P>
                                </Stack>
                            </VStack>
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
