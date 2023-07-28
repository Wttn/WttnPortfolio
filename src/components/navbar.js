import { forwardRef } from 'react'
import Logo from './logo'
import NextLink from 'next/link'
import { useRouter } from 'next/router'

import {
  Container,
  Box,
  Link,
  Stack,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue
} from '@chakra-ui/react'

import { HamburgerIcon } from '@chakra-ui/icons'


const LinkItem = ({ href, target, children, ...props }) => {
  const router = useRouter()
  const active = router.pathname === href
  const inactiveColor = useColorModeValue('gray.800', 'whiteAlpha.900')
  return (
    <Link
      as={NextLink}
      href={href}
      scroll={false}
      p={2}
      bg={active ? '#FFFFFF' : undefined}
      color={active ? '#00000' : inactiveColor}
      target={target}
      style={{
        fontWeight: active ? 'bold' : 'normal',
        fontFamily: 'Montserrat, sans-serif',
      }}
      {...props}
    >
      {children}
    </Link>
  )
}

const MenuLink = forwardRef((props, ref) => (
  <Link ref={ref} as={NextLink} {...props} />
))

MenuLink.displayName = "MenuLink"

const Navbar = props => {
  const { path } = props

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      zIndex={1}
      {...props}
    >
      <Container
        display="flex"
        paddingX='64px'
        direction='row'
        align='center'
        maxW='100%'
        bg={useColorModeValue('#ffffff')}
        justifyContent="space-between"
      >
        <Logo />

        <Stack
          direction="row"
          align="center"
          justify="flex-end"
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          flexGrow={32}
          mt={{ base: 4, md: 0 }}
        >
          <LinkItem href="/" >
            Home
          </LinkItem>
          <LinkItem href="/about" path={path} >
            About
          </LinkItem>
          <LinkItem href="/works" path={path} >
            Works
          </LinkItem>
          <LinkItem href="/illustrations" path={path} >
            Illustrations
          </LinkItem>
          <LinkItem href="/blog" path={path} >
            Blog
          </LinkItem>
        </Stack>
        <Box flex={1} align="right" padding="42px" >
          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu isLazy id="navbar-menu" >
              <MenuButton as={IconButton} icon={<HamburgerIcon />} variant="outline" aria-label="Options" />
              <MenuList>
                <MenuItem as={MenuLink} href="/">
                  Home
                </MenuItem>
                <MenuItem as={MenuLink} href="/about">
                  About
                </MenuItem>
                <MenuItem as={MenuLink} href="/works">
                  Works
                </MenuItem>
                <MenuItem as={MenuLink} href="/illustrations">
                  Illustrations
                </MenuItem>
                <MenuItem as={MenuLink} href="/blog">
                  Blog
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Navbar