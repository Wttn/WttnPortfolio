import React from 'react';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/router';
import { I18nextProvider } from 'react-i18next';
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
  useColorModeValue,
  Button
} from '@chakra-ui/react';
import { HamburgerIcon, ChevronDownIcon } from '@chakra-ui/icons';
import { FaLanguage } from "react-icons/fa6";
import NextLink from 'next/link';
import Logo from './logo';
import i18n from '../i18n.js'


const LinkItem = ({ href, target, children, ...props }) => {
  const router = useRouter();
  const active = router.pathname === href;
  const inactiveColor = useColorModeValue('gray.800', 'whiteAlpha.900');
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
  );
};

const MenuLink = React.forwardRef((props, ref) => (
  <Link ref={ref} as={NextLink} {...props} />
));

MenuLink.displayName = 'MenuLink';

const Navbar = (props) => {
  const { t } = useTranslation();
  const { path } = props;
  const translation = useTranslation();

  const changeLanguage = (language) => {
    translation.i18n.changeLanguage(language);
  };

  return (
    <I18nextProvider i18n={i18n}>
      <Box
        position="fixed"
        as="nav"
        w="100%"
        zIndex={1}
        {...props}
      >
        <Container
          display="flex"
          paddingX="64px"
          direction="row"
          align="center"
          maxW="100%"
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
            <LinkItem href="/">Home</LinkItem>
            <LinkItem href="/about" path={path}>
              {t('navbar.about')}
            </LinkItem>
            <LinkItem href="/works" path={path}>
              {t('navbar.works')}
            </LinkItem>
            <LinkItem href="/illustrations" path={path}>
              {t('navbar.illustrations')}
            </LinkItem>
            <LinkItem href="/blog" path={path}>
              Blog
            </LinkItem>

            <Menu>
              <MenuButton
                as={Button}
                fontFamily="Montserrat, sans-serif"
                fontWeight="normal"
                leftIcon={<FaLanguage size={24} />}
                rightIcon={<ChevronDownIcon size={24} />}
                variant="ghost"
                width="172px"
                textAlign="initial"
              >
                {translation.i18n.resolvedLanguage === "en-US" ? "English" : "Português"}

              </MenuButton>

              <MenuList>
                <MenuItem onClick={() =>
                  changeLanguage('en-US')
                }>
                  English
                </MenuItem>
                <MenuItem onClick={() =>
                  changeLanguage('pt-BR')
                }>
                  Português
                </MenuItem>
              </MenuList>
            </Menu>
          </Stack>
          <Box flex={1} align="right" padding="42px">
            <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
              <Menu isLazy id="navbar-menu">
                <MenuButton
                  as={IconButton}
                  icon={<HamburgerIcon />}
                  variant="ghost"
                  aria-label="Options"
                />
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
                  <MenuItem onClick={() => changeLanguage('en')}>
                    English
                  </MenuItem>
                  <MenuItem onClick={() => changeLanguage('pt')}>
                    Português
                  </MenuItem>
                </MenuList>
              </Menu>
            </Box>
          </Box>
        </Container>
      </Box>
    </I18nextProvider>

  );
};

export default Navbar