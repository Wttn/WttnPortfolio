import { Container, Heading, SimpleGrid, Stack } from '@chakra-ui/react'
import Section from '../../components/section'
import { BlogGrid } from '../../components/grid-item'
import styles from '../../styles/project.module.css'

import thumbRedesign from '../../../public/images/thumbnail/RedesignPortfolio-thumbnail.png'

const Blog = () => {
    return (
        <Stack>
            <Container>
                <Heading
                    className={styles.headerText}
                    fontSize="36px"
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