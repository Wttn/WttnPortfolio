import React from 'react';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/router';
import { I18nextProvider } from 'react-i18next';
import {
  Box,
  Link,
  Stack,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue,
  Button,
  MenuOptionGroup,
  MenuItemOption,
  MenuDivider,
  MenuGroup
} from '@chakra-ui/react';
import { HamburgerIcon, ChevronDownIcon } from '@chakra-ui/icons';
import { FaLanguage } from "react-icons/fa6";
import NextLink from 'next/link';
import Logo from './logo';
import i18n from '../i18n.js'
import styles from '../styles/navbar.module.css'

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
        <div
          display="flex"
          direction="row"
          align="center"
          maxW="100%"
          bg={useColorModeValue('#ffffff')}
          justifyContent="space-between"
          className={styles.headerContainer}
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
            <LinkItem href="/">
              {t('navbar.home')}
            </LinkItem>
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
                  <MenuGroup>
                    <MenuItem as={MenuLink} href="/">
                      {t('navbar.home')}
                    </MenuItem>
                    <MenuItem as={MenuLink} href="/about">
                      {t('navbar.about')}
                    </MenuItem>
                    <MenuItem as={MenuLink} href="/works">
                      {t('navbar.works')}
                    </MenuItem>
                    <MenuItem as={MenuLink} href="/illustrations">
                      {t('navbar.illustrations')}
                    </MenuItem>
                    <MenuItem as={MenuLink} href="/blog">
                      Blog
                    </MenuItem>
                  </MenuGroup>
                  <MenuDivider />
                  <MenuOptionGroup title={t('navbar.language')} textAlign='left' defaultValue={translation.i18n.resolvedLanguage} type='radio'>
                    <MenuItemOption value="en-US" onClick={() => changeLanguage('en-US')}>English</MenuItemOption>
                    <MenuItemOption value="pt-BR" onClick={() => changeLanguage('pt-BR')}>Português</MenuItemOption>
                  </MenuOptionGroup>
                </MenuList>
              </Menu>
            </Box>
          </Box>
        </div>
      </Box>
    </I18nextProvider>

  );
};

export default Navbar