import { Container, Heading, SimpleGrid, Divider, Stack, ChakraProvider } from '@chakra-ui/react'
import Section from '../../components/section'
import { WorkGrid } from '../../components/grid-item'

import ThumbAgro from '../../../public/images/thumbnail/Design-system1.png'

const Blog = () => {
    return (
        <Stack>
            <Container>
                <Heading
                    fontFamily="Montserrat"
                    fontWeight="bold"
                    fontSize="36px"
                    color="#FFFFFF"
                    mt={16}>
                    Blog
                </Heading>

                <SimpleGrid columns={[1, 2, 2]} gap={6} mt={16}>
                    <Section>
                        <WorkGrid id="AgrosolAppRegistroReclamacao" title="Agro-Sol App Registro de Reclamação" thumbnail={ThumbAgro}>
                        </WorkGrid>
                    </Section>
                    <Section>
                        <WorkGrid id="inkdrop" title="Inkdrop" thumbnail={ThumbAgro}>
                            A markdown note-taking app
                        </WorkGrid>
                    </Section>


                </SimpleGrid>
            </Container>
        </Stack>
    )
}
export default Blog