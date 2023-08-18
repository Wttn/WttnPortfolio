import NextLink from 'next/link'
import Image from 'next/image'
import { Box, Text, LinkBox, LinkOverlay, Stack } from '@chakra-ui/react'
import { Global } from '@emotion/react'
import styles from '../styles/works.module.css'

export const GridHero = ({ title, thumbnail }) => (
  <Stack
    className={styles.gridHeroStack}
    paddingX="12px"
    paddingY="24px"
    justify="center"
    align="center"
    borderColor="#000000"
    borderStyle="solid"
    borderWidth="3px"
    background="#FFFFFF"
  >
    <Image
      className={styles.gridHeroImage}
      src={thumbnail}
      alt={title}
    />

    <Text
      className={styles.gridHeroText}
      fontFamily="Montserrat"
      fontWeight="medium"
      color="#000000"
      textAlign="center"
    >
      {title}
    </Text>
  </Stack>
)

export const WorkGrid = ({ id, title, thumbnail }) => (
  <Box w="200px" textAlign="center" className={styles.gridItem}>
    <LinkBox
      as={NextLink}
      href={`/works/${id}`}
      scroll={false}
      cursor="pointer"
    >
      <Image
        src={thumbnail}
        alt={title}
        placeholder="blur"
        className={styles.image}
      />
      <LinkOverlay as="div" href={`/works/${id}`}>
        <Box width="200px" height="50px" borderColor="#FFFFFF" />
        <Text
          t={2}
          fontSize={14}
          fontFamily="Montserrat, sans-serif"
          color="#FFFFFF"
          flex="1"
          alignSelf="stretch"
          textAlign="center"
          _hover={{ textDecoration: 'underline' }}
        >
          {title}
        </Text>
      </LinkOverlay>
    </LinkBox>
  </Box>
)

export const GridItemStyle = () => (
  <Global
    styles={`
      .grid-item-thumbnail {
        border-radius: 12px;
      }
    `}
  />
)

export const BlogGrid = ({ id, title, thumbnail }) => (
  <Box w="200px" textAlign="center" className={styles.gridItem}>
    <LinkBox as={NextLink} href={`/blog/${id}`} scroll={false} cursor="pointer">
      <Image
        src={thumbnail}
        alt={title}
        placeholder="blur"
        className={styles.image}
      />
      <LinkOverlay as="div" href={`/works/${id}`}>
        <Box width="200px" height="50px" borderColor="#FFFFFF" />
        <Text
          t={2}
          fontSize={14}
          fontFamily="Montserrat, sans-serif"
          color="#FFFFFF"
          flex="1"
          alignSelf="stretch"
          textAlign="center"
          _hover={{ textDecoration: 'underline' }}
        >
          {title}
        </Text>
      </LinkOverlay>
    </LinkBox>
  </Box>
)
