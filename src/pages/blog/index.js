import { Container, Heading, SimpleGrid, Stack } from '@chakra-ui/react'
import Section from '../../components/section'
import { BlogGrid } from '../../components/grid-item'

import thumbRedesign from '../../../public/images/thumbnail/RedesignPortfolio-thumbnail.png'

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
                        <BlogGrid id="Redesign-Portfolio" title="Redesign Portfolio" thumbnail={thumbRedesign}>
                        </BlogGrid>
                    </Section>
                    <Section>

                    </Section>


                </SimpleGrid>
            </Container>
        </Stack>
    )
}
export default Blog