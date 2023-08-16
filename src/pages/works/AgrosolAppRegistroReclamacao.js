import {
    Container,
    ListItem,
    UnorderedList,
    Center,
    Image,
    VStack,
    Box
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { Title, Type, HeadingArticle } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
    <Layout title="Agro-sol App Registro de reclamação"  >
        <Container maxW="container.full" paddingX={0} >
            <Center my={6} w={'full'} backgroundSize={'cover'} backgroundPosition={'center center'} bgColor="#29451E" >
                <Image src="/images/works/App-Reclamacao-Agrosol 2.png" alt="icon" />
            </Center>
            <Container maxWidth="100%" mt="2rem">
                <VStack spacing="1.5rem" align='center'>

                    <VStack spacing="0.5rem" align='start' >
                        <Title>
                            Agro-sol APP Registro de Reclamação
                        </Title>

                        <Type>
                            IT Analyst / UI/UX Design
                        </Type>

                    </VStack >
                    <VStack align="left" spacing="1rem" width="49rem" flexGrow={1} mt="16px">
                        <VStack spacing="0.25rem" align='start' >
                            <HeadingArticle>
                                Challenge
                            </HeadingArticle>

                            <P>
                                This project initially started with a small conversation with the quality department manager, aiming to find a more effective way to manage complaints submitted to her department. At that time, all records were manually entered and controlled by her department.
                            </P>

                        </VStack>
                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", width: "100%", }}>
                            <VStack align="start">
                                <HeadingArticle>
                                    Tools
                                </HeadingArticle>
                                <P>
                                    Figma, Microsoft Power Apps
                                </P>
                            </VStack>
                            <VStack align="start">
                                <HeadingArticle>
                                    Team
                                </HeadingArticle>
                                <P>
                                    Self Directed
                                </P>
                            </VStack>
                        </div>
                        <Box maxW="fit-content" boxShadow={"0px 8px 15px 0px rgba(51, 51, 51, 0.15)"} mt="1.5rem" mb="1.5rem">
                            <Image src="/images/works/AppReclamacaoAgrosolDashboard.png" alt="icon" />
                        </Box>
                        <VStack align="left" gap="0.25rem" >
                            <HeadingArticle>
                                Research Goals
                            </HeadingArticle>
                            <UnorderedList>
                                <ListItem>{"Determine the current trend of existing players in the online retail market"}</ListItem>
                                <ListItem>{"Determine people's motivation for shopping in online shops"}</ListItem>
                                <ListItem>{"Determine people's motivation for shopping in-store"} </ListItem>
                            </UnorderedList>
                            <Box maxW="fit-content" boxShadow={"0px 8px 15px 0px rgba(51, 51, 51, 0.15)"} mt="1.5rem" mb="1.5rem">
                                <Image src="/images/works/MobileAppFluxogram.png" alt="icon" />
                            </Box>
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
