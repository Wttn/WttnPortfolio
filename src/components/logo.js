import { Box, Text, Image, Stack } from '@chakra-ui/react'
import styled from '@emotion/styled'
import styles from '../styles/navbar.module.css'

const LogoBox = styled.span`
padding: 16 px;
  > image {
    transition: 200ms ease;
  }

  &:hover > image {
    transform: rotate(20deg);
  }
`

const Logo = () => {
  return (
    <LogoBox>
      <Stack
        paddingY="16px"
        direction="row"
        justify="flex-end"
        align="center"
      >
        <Stack height="121px" flex="1">
          <Image
            className={styles.logo}
            alt="Wttn Logo"
            src="/images/logo.png"
            width="80px"
            height="80px"
            objectFit="cover"
          />
          <Text
            fontFamily="Montserrat"
            fontWeight="bold"
            fontSize="16px"
            color="#000000"
            width="134px"
            height="32px"
            lineHeight="12px"
            textAlign="left">
            <span>WTTN</span>
            <Box as="span" fontSize="18px">
              <br></br>
            </Box>
            <Box as="span" fontSize="12px">
              UX Design, Illustrator
            </Box>
          </Text>
        </Stack>
        <Stack direction="row" justify="flex-end" align="flex-start" spacing="52px">
          <Stack
            state="Default"
            height="27px"
            justify="flex-start"
            align="center"
            spacing="0px"
          >

          </Stack>
        </Stack>
      </Stack>
    </LogoBox>
  );
}

export default Logo
