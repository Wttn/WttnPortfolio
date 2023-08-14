import { Container, Heading, SimpleGrid, Stack } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next';

import Section from '../../components/section'
import { WorkGrid } from '../../components/grid-item'
import ThumbAgro from '../../../public/images/thumbnail/AppReclamacaoAgrosol-thumbnail.png'
import ThumbHotelAvenida from '../../../public/images/thumbnail/HotelAvenida-thumbnail.png'
import ThumbAgroDesignSystem from '../../../public/images/thumbnail/AgrosolDesignSystem-thumbnail.png'

const Works = () => {
    const { t } = useTranslation();
    return (
        <Stack>
            <Container>
                <Heading
                    fontFamily="Montserrat"
                    fontWeight="bold"
                    fontSize="36px"
                    color="#FFFFFF"
                    mt={16}>
                    {t('home.latestWorks')}
                </Heading>

                <SimpleGrid columns={[1, 2, 2]} gap={6} mt={16}>
                    <Section>
                        <WorkGrid id="AgrosolAppRegistroReclamacao" title="Agro-Sol APP Registro de Reclamação" thumbnail={ThumbAgro}>
                        </WorkGrid>
                    </Section>
                    <Section>
                        <WorkGrid id="AgrosolDesignSystem" title="Agro-Sol Design System" thumbnail={ThumbAgroDesignSystem}>
                        </WorkGrid>
                    </Section>
                    <Section>
                        <WorkGrid id="HotelAvenida" title="Hotel Avenida" thumbnail={ThumbHotelAvenida}>
                            A hotel website
                        </WorkGrid>
                    </Section>


                </SimpleGrid>
            </Container>
        </Stack>
    )
}
export default Works