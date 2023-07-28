import { Container, Heading, Stack, chakra, Text } from '@chakra-ui/react'
import Image from 'next/image'

import { FaFile, FaLinkedin } from 'react-icons/fa'
import AvatarProfile from '../../public/images/aboutphoto.jpg'


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
                    Hey, there!
                </Heading>
                <Heading
                    fontFamily="Montserrat"
                    fontWeight="Bold"
                    fontSize="4rem"
                    color="#1A1B1F"
                >
                    {"I'm Weltton Ortega"}
                </Heading>
            </Container>
            <Container paddingY="24px" display="flex" align-items=" flex-start" gap="2rem" maxWidth="100%">
                <Container maxWidth="100%" width="32.4375rem" align='start' padding="0rem" margin="0rem" >
                    <Text fontFamily="Montserrat" fontStyle="Normal" fontSize="16px" color="#1E1E1E" lineHeight="27px" fontWeight="400" padding="0" >
                        {"Brazilian UX designer that, in their spare time, also engages in my artistic side as an illustrator. I typically find myself working on personal projects and looking for methods to improve the experience. Whether it's examining current designs or generating new ideas."}
                    </Text>
                    <Text fontFamily="Montserrat" fontStyle="Normal" fontSize="30px" color="#1E1E1E" fontWeight="400" margin="0rem" paddingY="8px"  >
                        {"My Career so far"}
                    </Text>
                    <Text fontFamily="Montserrat" fontStyle="Normal" fontSize="16px" color="#1E1E1E" lineHeight="27px" fontWeight="400" padding="0" >
                        {"My background involves a degree in computer networks and working as an IT analyst, where I've been responsible for server management, database maintenance, and IT department leadership. I've gotten the opportunity to work with a variety of users in support, instruction, and training, during my time as a professional. These discussions gave me the chance to hear about their worries as well as ideas, which made me want to create programs that would solve their issues. That's how I met UX Design, immersing myself in activities such as user testing, research, interface enhancement, and feedback gathering. Because of my intimate contact with people, I always gave priority to creating solutions that addressed their demands. I made the decision that my objective would be to develop accessible and user-friendly solutions and designs after realizing that many readily available solutions were not used effectively owing to bad design choices, creating confusion and unease among users. I hope to have a positive impact on people's lives in this way. I was inspired to pursue a profession in UX design because of this."}
                    </Text>
                </Container>
                <Container width={'fit-content'}>
                    <Image
                        src={AvatarProfile}
                        alt={"Weltton"}
                        style={{ borderRadius: '64px', width: '254.02px', height: '565px' }}

                    />
                    <Stack spacing="1.5rem" padding="32px">
                        <SocialButton label={'Resume'} href={'../resume.pdf'} >
                            <FaFile />
                        </SocialButton>
                        <SocialButton label={'Linkedin'} href={'https://www.linkedin.com/in/weltton/'}>
                            <FaLinkedin />
                        </SocialButton>
                    </Stack>

                </Container>

            </Container>
        </Container >
    )
}
export default About