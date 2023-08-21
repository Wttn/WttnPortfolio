import {
    Container,
    Center,
    Image,
    Stack,
    Box,
    VStack,
    ListItem,
    UnorderedList,
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { Title, Type, HeadingArticle, DescriptionImage } from '../../components/work'
import P from '../../components/paragraph'
import { useTranslation } from 'react-i18next';

const Work = () => {
    const { t } = useTranslation();
    return (
        <Layout title="Agro-sol App Registro de Reclamação"  >
            <Container maxW="container.full" paddingX={0}>
                <Center my={6} w={'full'} backgroundSize={'cover'} backgroundPosition={'center center'} bgColor="#29451E" >
                    <Image src="/images/works/App-Reclamacao-Agrosol 2.png" alt={t('appRegistroReclamacao.altTitleImage')} />
                </Center>
                <Container maxWidth="100%" mt="2rem">
                    <VStack spacing="1.5rem" align='center'>

                        <VStack spacing="0.5rem" align='start' width="49rem" maxWidth="100%" >
                            <Title>
                                {t('appRegistroReclamacao.title')}
                            </Title>

                            <Type>
                                {t('appRegistroReclamacao.job')}
                            </Type>

                        </VStack >
                        <VStack align="left" spacing="1rem" width="49rem" flexGrow={1} mt="16px" maxWidth="100%" >
                            <VStack spacing="0.25rem" align='start'  >
                                <HeadingArticle>
                                    {t('appRegistroReclamacao.headerContext')}
                                </HeadingArticle>

                                <P>
                                    {t('appRegistroReclamacao.paragraphContext')}
                                </P>

                            </VStack>

                            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", maxWidth: "100%", marginTop: "16px" }}>
                                <VStack align="start " >
                                    <HeadingArticle>
                                        {t('appRegistroReclamacao.tools')}
                                    </HeadingArticle>
                                    <P>
                                        {t('appRegistroReclamacao.toolsContent')}
                                    </P>
                                </VStack>
                                <VStack align="start">
                                    <HeadingArticle>
                                        {t('appRegistroReclamacao.team')}
                                    </HeadingArticle>
                                    <P>
                                        {t('appRegistroReclamacao.teamContent')}
                                    </P>
                                </VStack>
                            </div>

                            <Stack align="center" marginTop="16px" >

                                <Box maxW="fit-content" boxShadow={"0px 1px 10px 0px rgba(51, 51, 51, 0.15)"} mt="1.5rem" mb="1.5rem">
                                    <Image src="/images/works/AppReclamacaoAgrosolDashboard.png" alt="A screenshot of hotel avenida website" />

                                </Box>
                                <DescriptionImage>
                                    {t('appRegistroReclamacao.imageDescription')}
                                </DescriptionImage>
                            </Stack>

                            <VStack align="left" gap="0.2rem" marginTop="16px" >
                                <HeadingArticle>
                                    {t('appRegistroReclamacao.headerBrainstorming')}
                                </HeadingArticle>
                                <P>
                                    {t('appRegistroReclamacao.paragraphBrainstorming')}
                                </P>
                            </VStack>

                            <Stack align="center" >

                                <Box maxW="fit-content" boxShadow={"0px 1px 10px 0px rgba(51, 51, 51, 0.15)"} mt="1.5rem" mb="1.5rem">
                                    <Image src="/images/works/AppAgrosolSketch.png" alt="A screenshot of hotel avenida website" />

                                </Box>
                                <DescriptionImage>
                                    {t('appRegistroReclamacao.imageDescription2')}
                                </DescriptionImage>
                            </Stack>

                            <VStack align="left" gap="0.2rem" marginTop="16px" >
                                <HeadingArticle>
                                    {t('appRegistroReclamacao.headerStategicObjectives')}
                                </HeadingArticle>
                                <P>
                                    <UnorderedList spacing="6px">
                                        <ListItem>{t('appRegistroReclamacao.listStategicObjectives1')}</ListItem>
                                        <ListItem>{t('appRegistroReclamacao.listStategicObjectives2')}</ListItem>
                                        <ListItem>{t('appRegistroReclamacao.listStategicObjectives3')}</ListItem>
                                        <ListItem>{t('appRegistroReclamacao.listStategicObjectives4')}</ListItem>
                                    </UnorderedList>
                                </P>
                            </VStack>

                            <VStack align="left" marginTop="16px" >
                                <HeadingArticle>
                                    {t('appRegistroReclamacao.headerSiteMap')}
                                </HeadingArticle>
                                <P>
                                    {t('appRegistroReclamacao.paragraphSiteMap')}
                                </P>
                            </VStack>

                            <Stack align="center" >
                                <Box maxW="fit-content" boxShadow={"0px 1px 10px 0px rgba(51, 51, 51, 0.15)"} mt="1.5rem" mb="1.5rem">
                                    <Image src="/images/works/MobileAppFluxogram.png" alt={t('altRegistroReclamacao.descriptionImageSiteMap')} />
                                </Box>
                                <DescriptionImage>
                                    {t('appRegistroReclamacao.descriptionImageSiteMap')}
                                </DescriptionImage>
                            </Stack>

                            <VStack align="left" marginTop="16px" >
                                <HeadingArticle>
                                    {t('appRegistroReclamacao.headerUsabilityTesting')}
                                </HeadingArticle>
                                <P>
                                    {t('appRegistroReclamacao.paragraphUsabilityTesting')}
                                </P>
                                <P>
                                    <UnorderedList spacing="6px">
                                        <ListItem>{t('appRegistroReclamacao.listUsabilityTesting1')}</ListItem>
                                        <ListItem>{t('appRegistroReclamacao.listUsabilityTesting2')}</ListItem>
                                        <ListItem>{t('appRegistroReclamacao.listUsabilityTesting3')}</ListItem>
                                    </UnorderedList>
                                </P>
                            </VStack>
                            <VStack align="left" marginTop="16px" >
                                <HeadingArticle>
                                    {t('appRegistroReclamacao.headerMobileMockups')}
                                </HeadingArticle>
                                <P>
                                    {t('appRegistroReclamacao.paragraphMobileMockups')}
                                </P>
                            </VStack>

                            <Stack align="center"  >
                                <Box maxW="fit-content" boxShadow={"0px 1px 10px 0px rgba(51, 51, 51, 0.15)"} mt="1.5rem" mb="1.5rem">
                                    <Image src="/images/works/AppReclamacaoMockup.png" alt="A screenshot of hotel avenida website" />
                                </Box>
                                <DescriptionImage>
                                    {t('appRegistroReclamacao.imageDescription3')}
                                </DescriptionImage>
                            </Stack>

                            <VStack align="left" marginTop="16px">
                                <HeadingArticle>
                                    {t('appRegistroReclamacao.headerConclusion')}
                                </HeadingArticle>
                                <P>
                                    {t('appRegistroReclamacao.paragraphConclusion1')}
                                </P>

                                <P>
                                    {t('appRegistroReclamacao.paragraphConclusion2')}
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
}

export default Work
