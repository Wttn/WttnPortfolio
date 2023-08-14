import { Container, Heading, SimpleGrid, Text, Stack } from "@chakra-ui/react"

import Section from '../components/section'
import Image from 'next/image'

import { WorkGrid } from '../components/grid-item'
import { GridHero } from '../components/grid-item'

import React from 'react';
import { useTranslation } from 'react-i18next';

import IconEmpathy from '../../public/images/icon/Empathy.png'
import IconIdeation from '../../public/images/icon/Ideation.png'
import IconMakeSimple from '../../public/images/icon/MakeSimple.png'
import IconResearch from '../../public/images/icon/Research.png'
import ThumbAgro from '../../public/images/thumbnail/AppReclamacaoAgrosol-thumbnail.png'
import ThumbHotelAvenida from '../../public/images/thumbnail/HotelAvenida-thumbnail.png'
import ThumbAgroDesignSystem from '../../public/images/thumbnail/AgrosolDesignSystem-thumbnail.png'
import Avatar from '../../public/images/avatar.png'


const Page = () => {
  const { t } = useTranslation();
  return (
    <Container maxW="container.lg" >
      <Text
        fontFamily="Montserrat"
        fontWeight="regular"
        fontSize="36px"
        color="#000000"
        minHeight="131px"
        textAlign="center"
      >
        <span style={{ fontSize: "40px" }}>{t('home.greeting')}</span>
        <br />
        <span>
          <strong>{t('home.description')}</strong> {t('home.from')}
        </span>
        <br />
        <span>{t('home.designPhilosophy')}</span>
      </Text>
      <div style={{ padding: "0 1.6875em" }}>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', position: 'relative' }}>

          <Stack
            direction="row"
            justify="center"
            align="center"
            spacing="1em"
            width="22.75em"
            height="20.375em"
            maxWidth="100%"
            mt={6}>
            <SimpleGrid columns={[1, 2, 2]} gap={3}>
              <GridHero thumbnail={IconIdeation} title={t('home.headerGrid.ideation')} />
              <GridHero thumbnail={IconResearch} title={t('home.headerGrid.research')} />
              <GridHero thumbnail={IconEmpathy} title={t('home.headerGrid.empathy')} />
              <GridHero thumbnail={IconMakeSimple} title={t('home.headerGrid.makeSimple')} />
            </SimpleGrid>
          </Stack>
          <div style={{ right: '-12.5em', position: 'absolute', top: '-2.1875em' }}>
            <Image
              src={Avatar}
              alt={"Weltton"}
              width={430}
              height={521}
            />
          </div>
        </div>
        <Container padding={0} maxWidth="100%" mt={32} mb={24}>
          <Heading
            fontFamily="Montserrat"
            fontWeight="bold"
            fontSize="2.25rem"
            color="#FFFFFF">
            {t('home.latestWorks')}
          </Heading>
          <SimpleGrid columns={4} spacing="2em" mt={16}>
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
                A markdown note-taking app
              </WorkGrid>
            </Section>
          </SimpleGrid>
        </Container>
      </div >
    </Container >
  );
};


export default Page;