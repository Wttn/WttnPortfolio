import { Container, Heading, SimpleGrid, Text, Stack } from "@chakra-ui/react"

import Section from '../components/section'
import Image from 'next/image'

import { WorkGrid } from '../components/grid-item'
import { GridHero } from '../components/grid-item'


import IconEmpathy from '../../public/images/icon/Empathy.png'
import IconIdeation from '../../public/images/icon/Ideation.png'
import IconMakeSimple from '../../public/images/icon/MakeSimple.png'
import IconResearch from '../../public/images/icon/Research.png'
import ThumbAgro from '../../public/images/thumbnail/Design-system1.png'
import Avatar from '../../public/images/avatar.png'



const Page = () => {
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
        <span style={{ fontSize: "40px" }}>Hi! I’m Weltton.</span>
        <br />
        <span>
          I&apos;m a <strong>Multidisciplinary UX Designer</strong> from Brazil
        </span>
        <br />
        <span>
          I Design for Humans from Humans.
        </span>
      </Text>
      <div style={{ padding: "0 27px" }}>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', position: 'relative' }}>

          <Stack
            direction="row"
            justify="center"
            align="center"
            spacing="16px"
            width="364px"
            height="326px"
            maxWidth="100%"
            mt={6}>
            <SimpleGrid columns={[1, 2, 2]} gap={3}>
              <GridHero thumbnail={IconIdeation} title="Ideation" />
              <GridHero thumbnail={IconResearch} title="Research" />
              <GridHero thumbnail={IconEmpathy} title="Empathy" />
              <GridHero thumbnail={IconMakeSimple} title="Make Simple" />
            </SimpleGrid>
          </Stack>
          <div style={{ right: '-200px', position: 'absolute', top: '-35px' }}>
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
            fontSize="36px"
            color="#FFFFFF">
            Latest Works
          </Heading>
          <SimpleGrid columns={4} spacing="32px" mt={16}>
            <Section>
              <WorkGrid id="AgrosolAppRegistroReclamacao" title="AgroSol App Registro de Reclamação" thumbnail={ThumbAgro}>
              </WorkGrid>
            </Section>
            <Section>
              <WorkGrid id="inkdrop" title="Agrosol Design System" thumbnail={ThumbAgro}>
                A markdown note-taking app
              </WorkGrid>
            </Section>
            <Section>
              <WorkGrid id="AgrosolDesignSystem" title="Agro-Sol Design System" thumbnail={ThumbAgro}>
              </WorkGrid>
            </Section> <Section>
              <WorkGrid id="AgrosolDesignSystem" title="Agro-Sol Design System" thumbnail={ThumbAgro}>
              </WorkGrid>
            </Section>
          </SimpleGrid>
        </Container>
      </div >
    </Container >
  );
};


export default Page