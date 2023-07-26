import React, { useState } from 'react';
import { Flex, Box, Grid, Text, Stack, VStack, Img, Icon, Button, position } from '@chakra-ui/react';
import styles from '../styles/illustrations.module.css';
import { AiOutlineFullscreen } from 'react-icons/ai'


import { images } from '../utils/imagePath'

const Gallery = () => {

    const [currentImage, setCurrentImage] = useState(images[0]);

    const handleThumbnailClick = (image) => {
        window.scrollTo({
            top: 0, behavior: "smooth"
        })
        setCurrentImage(image);
    };

    return (
        <Box p={4} align="center"  >
            <Box id="main-image"
                boxShadow="0px 8px 15px 0px rgba(51, 51, 51, 0.15)"
                width="fit-content"
                mb={4}
                position="relative"

            >

                <Img
                    src={currentImage.thumbnail}
                    alt={currentImage.alt}
                    objectFit="contain"
                    maxHeight="645px"
                />

                <a className={styles.expandButton} href={currentImage.src} target="_blank">
                    <AiOutlineFullscreen size="24px" />
                </a>

            </Box>

            <Flex direction="column" align="center" mb="32px">
                <Text fontSize="42px" fontFamily="Montserrat" fontWeight="bold" lineHeight="56px" >
                    {currentImage.title}
                </Text>
                <Text fontSize="24px" color="#9C9C9C">
                    {currentImage.creationDate}
                </Text>
            </Flex>

            <Grid templateColumns="repeat(3, 1fr)" gap="32px" maxW="fit-content" >
                {images.map((image, index) => (
                    <VStack className={styles.imageCard} key={index} >
                        <Flex
                            direction="column"
                            align="center"
                            w="436px"
                            h="292px"
                            borderRadius="16px"
                            overflow="hidden"
                            cursor="pointer"
                            onClick={() => handleThumbnailClick(image)}
                            className={styles.image}
                        >
                            <Img src={image.thumbnail} alt={`Thumbnail ${index}`} mb={2} />
                        </Flex>
                        <Box p="8px">
                            <Text fontSize="20px" fontFamily="Montserrat" className={styles.title} >{image.title}</Text>
                        </Box>
                    </VStack>
                ))}
            </Grid>


        </Box >
    );
};

export default Gallery;
