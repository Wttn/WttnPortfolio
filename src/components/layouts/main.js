import Head from 'next/head'
import Navbar from '../navbar.js'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer.js'

const Main = ({ children, router }) => {
  const isHome = !router.pathname.includes("works") && router.pathname !== "/illustrations" && router.pathname !== "/about" && !router.pathname.includes("blog")
  const isWhitePage = (router.pathname !== "/works" && router.pathname !== "/blog") || router.pathname.includes("/works/") || router.pathname.includes("/blogs/")
  const pageBackground = isHome ? 'linear-gradient(white 45.5rem, black 45.5rem)' : isWhitePage ? 'white' : 'black'

  return (
    <Box as="main" style={{ background: pageBackground, minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale1" />
        <title> Wttn Portfolio</title>
      </Head>
      <Navbar path={router.asPath} />
      <Container maxW="100%" pt={184} style={{ minHeight: "calc(100vh - 245px)" }} paddingX={0}>
        {children}
      </Container>
      <Footer />
    </Box>

  )
}

export default Main