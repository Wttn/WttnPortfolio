import { Container, Heading, SimpleGrid, Text, Stack } from '@chakra-ui/react'

import Section from '../components/section'
import Image from 'next/image'

import { WorkGrid, GridHero } from '../components/grid-item'

import React from 'react'
import { useTranslation } from 'react-i18next'

import IconEmpathy from '../../public/images/icon/Empathy.png'
import IconIdeation from '../../public/images/icon/Ideation.png'
import IconMakeSimple from '../../public/images/icon/MakeSimple.png'
import IconResearch from '../../public/images/icon/Research.png'
import ThumbAgro from '../../public/images/thumbnail/AppReclamacaoAgrosol-thumbnail.png'
import ThumbHotelAvenida from '../../public/images/thumbnail/HotelAvenida-thumbnail.png'
import ThumbAgroDesignSystem from '../../public/images/thumbnail/AgrosolDesignSystem-thumbnail.png'
import Avatar from '../../public/images/avatar.png'

import styles from '../styles/home.module.css'

const Page = () => {
  const { t } = useTranslation()

  const latestWorks = [
    {
      id: 'AgrosolAppRegistroReclamacao',
      title: 'Agro-Sol APP Registro de Reclamação',
      thumbnail: ThumbAgro
    },
    {
      id: 'AgrosolDesignSystem',
      title: 'Agro-Sol Design System',
      thumbnail: ThumbAgroDesignSystem
    },
    {
      id: 'HotelAvenida',
      title: 'Hotel Avenida',
      thumbnail: ThumbHotelAvenida
    }
  ]

  return (
    <Container maxW="container.lg" className={styles.mainContainer}>
      <Text
        fontFamily="Montserrat"
        fontWeight="regular"
        fontSize="36px"
        color="#000000"
        minHeight="131px"
        textAlign="center"
      >
        <span style={{ fontSize: '40px' }}>{t('home.greeting')}</span>
        <br />
        <span>
          <strong>{t('home.description')}</strong> {t('home.from')}
        </span>
        <br />
        <span>{t('home.designPhilosophy')}</span>
      </Text>
      <div style={{ padding: '0 1.6875em' }}>
        <div className={styles.heroBlock}>
          <Stack
            direction="row"
            justify="center"
            align="center"
            spacing="1em"
            width="22.75em"
            height="fit-content"
            maxWidth="100%"
            mt={6}
          >
            <SimpleGrid columns={[1, 2, 2]} gap={3}>
              <GridHero
                thumbnail={IconIdeation}
                title={t('home.headerGrid.ideation')}
              />
              <GridHero
                thumbnail={IconResearch}
                title={t('home.headerGrid.research')}
              />
              <GridHero
                thumbnail={IconEmpathy}
                title={t('home.headerGrid.empathy')}
              />
              <GridHero
                thumbnail={IconMakeSimple}
                title={t('home.headerGrid.makeSimple')}
              />
            </SimpleGrid>
          </Stack>
          <div className={styles.heroImage}>
            <Image src={Avatar} alt={'Weltton'} width={430} height={521} />
          </div>
        </div>
        <Container
          padding={0}
          maxWidth="100%"
          mb={24}
          className={styles.worksContainer}
        >
          <Heading
            fontFamily="Montserrat"
            fontWeight="bold"
            fontSize="2.25rem"
            color="#FFFFFF"
          >
            {t('home.latestWorks')}
          </Heading>
          <SimpleGrid columns={[1, 1, 3, 4, 4]} spacing="2em" mt={16}>
            {latestWorks.map(item => (
              <Section className={styles.workGridBox} key={item.id}>
                <WorkGrid
                  id={item.id}
                  title={item.title}
                  thumbnail={item.thumbnail}
                ></WorkGrid>
              </Section>
            ))}
          </SimpleGrid>
        </Container>
      </div>
    </Container>
  )
}

export default Page
