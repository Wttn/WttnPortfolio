import { Heading, Box, Image, Badge } from '@chakra-ui/react'

export const Title = ({ children }) => (
  <Box>
    <Heading fontSize="42px" fontFamily="Inter" color="#1A1B1F">
      {children}
    </Heading>
  </Box>
)

export const HeadingArticle = ({ children }) => (
  <Box>
    <Heading display="inline-block" fontSize="23px" fontFamily="Inter" color="#1A1B1F" fontWeight="500" >
      {children}
    </Heading>
  </Box>
)


export const Type = ({ children }) => (
  <Box>
    <Heading display="inline-block" fontSize="19px" fontFamily="Inter" color="(26, 27, 31, 0.50)" textAlign="center" fontWeight="300" >
      {children}
    </Heading>
  </Box>
)


export const WorkImage = ({ src, alt }) => (
  <Image borderRadius="lg" w="full" src={src} alt={alt} mb={4} />
)

export const Meta = ({ children }) => (
  <Badge colorScheme="green" mr={2}>
    {children}
  </Badge>
)

export const DescriptionImage = ({ children }) => (
  <Box>
    <Heading display="inline-block" fontFamily="Montserrat" fontSize="14px" color="#1A1B1F" fontWeight="300" >
      {children}
    </Heading>
  </Box>
)