import {
  Box,
  chakra,
  Container,
  LightMode,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from '@chakra-ui/react';
import { FaInstagram, FaDribbble, FaLinkedin } from 'react-icons/fa'


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
      transition={'color 0.3s ease'}
      _hover={{
        color: useColorModeValue('#5067A1', '#5067A1'),
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function Footer() {
  return (
    <LightMode>
      <Box
        bg={useColorModeValue('#FFFFFF')}
        max-width="100%"
        height="3.25rem"
        paddingX="1.5rem"
        mt="auto"
      >
        <Container
          as={Stack}
          maxW={'16xl'}
          py="1rem"
          direction={{ base: 'column', md: 'row' }}
          justify={{ base: 'center', md: 'space-between' }}
          align={{ base: 'center' }}
        >
          <Text fontFamily="Montserrat" fontSize="16px">2023 © WTTN </Text>
          <Stack direction={'row'} spacing="1.5rem">
            <SocialButton label={'Linkedin'} href={'https://www.linkedin.com/in/weltton/'}>
              <FaLinkedin />
            </SocialButton>
            <SocialButton label={'Instagram'} href={'https://www.instagram.com/welandton/'}>
              <FaInstagram />
            </SocialButton>
          </Stack>
        </Container>
      </Box >
    </LightMode>
  );
}