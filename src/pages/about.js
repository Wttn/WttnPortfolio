import { Container, Heading, chakra, Text } from '@chakra-ui/react'
import Image from 'next/image'
import { useTranslation } from 'react-i18next';

import { FaFile, FaLinkedin } from 'react-icons/fa'
import AvatarProfile from '../../public/images/profilephoto.png'
import styles from '../styles/about.module.css'


const SocialButton = ({
    children,
    label,
    href,
}) => {
    return (
        <chakra.button
            cursor={'pointer'}
            as={'a'}
            href={href}
            display={'inline-flex'}
            alignItems={'center'}
            justifyContent={'center'}
            transition={'color 0.5s ease'}
            fontFamily={'Montserrat'}
            target='_blank'
            _hover={{
                textDecoration: 'underline',
                transition: 'text-decoration 0.3s ease-out, color 0.3s ease-out'
            }}
        >
            {children}
            <span style={{ marginLeft: '8px' }}>{label}</span>
        </chakra.button>

    );
};



const About = () => {
    const { t, i18n } = useTranslation();
    const resumeLink = i18n.language === 'pt-BR' ? '/resume_pt.pdf' : '/resume_en.pdf';
    return (
        <Container maxW="container.lg">
            <Container maxWidth="100%">
                <Heading
                    fontFamily="Montserrat"
                    fontWeight="Medium"
                    fontSize="32px"
                    color="#1A1B1F"
                    mt='32px'
                    textAlign="left"

                >
                    {t('about.helloHeader')}
                </Heading>
                <Heading
                    fontFamily="Montserrat"
                    fontWeight="Bold"
                    fontSize="4rem"
                    color="#1A1B1F"
                >
                    {t('about.nameHeader')}
                </Heading>
            </Container>
            <Container paddingY="24px" display="flex" align-items=" flex-start" gap="2rem" maxWidth="100%">
                <Container align='start' padding="0rem" margin="0rem" className={styles.mainContainer} >
                    <Text fontFamily="Montserrat" fontStyle="Normal" fontSize="16px" color="#1E1E1E" lineHeight="27px" fontWeight="400" padding="0" >
                        {t('about.aboutIntroduction')}
                    </Text>
                    <Image
                        src={AvatarProfile}
                        alt={"Weltton"}
                        className={styles.aboutMobilePhoto}
                    />
                    <div className={styles.aboutLinksMobile} >
                        <SocialButton label={'Resume'} href={resumeLink}>
                            <FaFile />
                        </SocialButton>
                        <SocialButton label={'Linkedin'} href={'https://www.linkedin.com/in/weltton/'}>
                            <FaLinkedin />
                        </SocialButton>
                    </div>
                    <Text fontFamily="Montserrat" fontStyle="Normal" fontSize="30px" color="#1E1E1E" fontWeight="400" margin="0rem" paddingY="8px" width="100%"  >
                        {t('about.aboutHeader2')}
                    </Text>
                    <Text fontFamily="Montserrat" fontStyle="Normal" fontSize="16px" color="#1E1E1E" lineHeight="27px" fontWeight="400" padding="0" >
                        {t('about.aboutText')}
                    </Text>
                </Container>
                <Container width={'fit-content'} className={styles.desktopContainer}>
                    <Image
                        src={AvatarProfile}
                        alt={"Weltton"}
                        className={styles.aboutDesktopPhoto}
                    />
                    <div className={styles.aboutLinksDesktop} >
                        <SocialButton label={'Resume'} href={resumeLink}>
                            <FaFile />
                        </SocialButton>
                        <SocialButton label={'Linkedin'} href={'https://www.linkedin.com/in/weltton/'}>
                            <FaLinkedin />
                        </SocialButton>
                    </div>

                </Container>

            </Container>
        </Container >
    )
}
export default About