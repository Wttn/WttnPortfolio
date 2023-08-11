import { ChakraProvider } from "@chakra-ui/react"
import Layout from "../components/layouts/main"
import Fonts from "../components/fonts"
import "./app.css"
import '../styles/global.css'



const Website = ({ Component, pageProps, router }) => {
    return (
        <ChakraProvider>
            <Fonts />
            <Layout router={router}>
                <Component {...pageProps} key={router.route} />
            </Layout>
        </ChakraProvider>
    )
}

export default Website